import { Resolver, Mutation, Ctx, Args, Authorized, Query } from "type-graphql";
import { Context } from "../../../context";
import { Bookings } from "../../models/Bookings";
import { CreateBookingArgs } from "./args/CreateBookingArgs";





@Resolver((_of) => Bookings)
export class BookingResolver {
  @Mutation((_returns) => Bookings, {
    nullable: false,
  })
  async createBooking(
    @Ctx() { prisma }: Context,
    @Args() args: CreateBookingArgs,
  ): Promise<Bookings> {

    return prisma.bookings.create({ ...args });
  }
  
  
 
}