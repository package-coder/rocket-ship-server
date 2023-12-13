import { Resolver, Mutation, Ctx, Args, Authorized, Query, Arg, Int } from "type-graphql";
import { Context } from "../../../context";
import { Bookings } from "../../models/Bookings";
import { CreateBookingArgs } from "./args/CreateBookingArgs";
import { joinOrCreate } from "../../helpers";
import { FindManyBookingsArgs } from "./args/FindManyBookingsArgs";
import { BookingStatusEnum } from "../../enums/BookingStatusEnum";
import { BookingStatus } from "@prisma/client";
import moment from "moment";

@Resolver((_of) => Bookings)
export class BookingResolver {
  @Authorized()
  @Mutation((_returns) => Bookings, { nullable: false })
  async createBooking(
    @Ctx() { prisma, payload }: Context,
    @Args() args: CreateBookingArgs,
  ): Promise<Bookings> {
    const user = payload?.user

    const data = { ...args.data }
    const booking = await prisma.bookings.create({
      data: {
        ...data,
        pickup_addr: joinOrCreate(data.pickup_addr),
        dest_addr: joinOrCreate(data.dest_addr),
        customer: { connect: { id: user?.id } },
        created_at: moment().toISOString()
      },
      include: { pickup_addr: true, dest_addr: true }
    })

    return booking;
  }

  @Authorized()
  @Query(_returns => [Bookings])
  async getAllBookings(
    @Ctx() { prisma, payload }: Context,
    @Args() args: FindManyBookingsArgs
  ): Promise<Array<Bookings>> {
    const user = payload?.user

    let query = {}

    if(user?.user_type == 'D')
      query = { driver_id: user?.id }
    else if(user?.user_type == 'C')
      query = { customer_id: user?.id }

    return await prisma.bookings.findMany({ 
      ...args,
      where: query,
      include: { 
        pickup_addr: true, 
        dest_addr: true,
        customer: true
      }
    })
  }

  @Authorized()
  @Query(_returns => Bookings, { nullable: true })
  async getBookingsById(
    @Ctx() { prisma }: Context,
    @Arg("id", _type => Int, { nullable: false }) id: number
  ): Promise<Bookings | null> {

    return await prisma.bookings.findUnique({ 
      where: { id },
      include: { 
        pickup_addr: true, 
        dest_addr: true,
        customer: true
      }
    })
  }

  @Authorized()
  @Mutation(_returns => Bookings, { nullable: true })
  async updateBookingStatus(
    @Ctx() { prisma }: Context,
    @Arg("id", _type => Int, { nullable: false }) id: number,
    @Arg("status", _type => BookingStatusEnum, { nullable: false }) status: BookingStatusEnum
  ): Promise<Bookings | null> {

    return await prisma.bookings.update({ 
      where: { id },
      data: { status: status.toString() as BookingStatus },
      include: { 
        pickup_addr: true, 
        dest_addr: true,
        customer: true
      }
    })
  }


  @Mutation(_returns => Bookings)
  async assignBookingDriver(
    @Ctx() { prisma }: Context,
    @Arg('bookingId', _type => Int, { nullable: false }) bookingId: number,
    @Arg('driverId', _type => Int, { nullable: false }) driverId: number,

  ) {
    const booking = await prisma.bookings.findFirst({ where: { id: bookingId } })
    if (!booking)
      throw new Error('No booking is found')

    const driver = await prisma.users.findFirst({ where: { id: driverId } })
    if (!driver || driver.user_type !== 'D')
      throw new Error('No driver is found')

    return await prisma.bookings.update({ where: { id: booking.id }, data: { driver_id: driver.id } })
  }
}