import { Resolver, Mutation, Ctx, Args, Authorized, Query } from "type-graphql";
import { Context } from "../../../context";
import { Bookings } from "../../models/Bookings";
import { CreateBookingArgs } from "./args/CreateBookingArgs";



@Resolver((_of) => Bookings)
export class BookingResolver {
  @Authorized()
  @Mutation((_returns) => Bookings, {
    nullable: false,
  })
  async createBooking(
    @Ctx() { prisma, payload }: Context,
    @Args() args: CreateBookingArgs,
  ): Promise<Bookings> {
    const user = payload?.user

    const data = {
      ...args.data,
      customer_id: user?.id,
    }

    return prisma.bookings.create({ data });
  }
  
  @Authorized()
  @Query(_returns => [Bookings], { nullable: false })
  async getAllBookings(
    @Ctx() { prisma, payload }: Context,
  ): Promise<Array<Bookings>> {
    const user = payload?.user

    let query = {}

    if(user?.user_type == 'D')
      query = { driver_id: user?.id }
    else if(user?.user_type == 'C')
      query = { customer_id: user?.id }

    return await prisma.bookings.findMany({ where: query })
  }
}