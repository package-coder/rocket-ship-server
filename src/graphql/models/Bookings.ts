import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookingStatus, Prisma } from "@prisma/client";
import { BookingStatusEnum } from "../enums/BookingStatusEnum";
import { Addresses } from "../models/Addresses";
import { Users } from "./Users";

@TypeGraphQL.ObjectType("Bookings", {})
export class Bookings {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Users, {
    nullable: true
  })
  customer?: Users | null

  customer_id?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  user_id?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  vehicle_id?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  driver_id?: number | null;
  
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  trackingNumber?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  pickup?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  dropoff?: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  duration?: number | null;

  pickup_addr_id?: number | null;

  @TypeGraphQL.Field(_type => Addresses, {
    nullable: true
  })
  pickup_addr?: Addresses | null;

  dest_addr_id?: number | null;

  @TypeGraphQL.Field(_type => Addresses, {
    nullable: true
  })
  dest_addr?: Addresses | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dest_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dest_contact!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  note?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  parcel_type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  parcel_weight!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  travellers?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  cancellation?: number | null;

  @TypeGraphQL.Field(_type => BookingStatusEnum, {
    nullable: true
  })
  status!: BookingStatus | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  payment?: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  deleted_at?: Date | null;
}
