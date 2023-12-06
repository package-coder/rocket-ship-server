import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Booking_payments", {
  simpleResolvers: true,
})
export class Booking_payments {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  id!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  booking_id?: number | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  method?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  transaction_id?: string | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: false,
  })
  amount!: number;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  payment_status?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  payment_details?: string | null;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  created_at?: Date | null;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updated_at?: Date | null;
}
