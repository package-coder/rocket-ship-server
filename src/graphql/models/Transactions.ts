import * as TypeGraphQL from "type-graphql";
import { BookingStatus, Prisma } from "@prisma/client";
import { BookingStatusEnum } from "../enums/BookingStatusEnum";


@TypeGraphQL.ObjectType("Transactions", {})
export class Transactions {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => BookingStatusEnum, {
    nullable: true
  })
  status!: BookingStatus | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  datetime?: Date | null;
}
