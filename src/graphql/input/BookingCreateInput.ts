import { ArgsType, Field, InputType, Int } from "type-graphql";
import { AddressCreateInput } from "./AddressCreateInput";
import { AddressCreateJoinInput } from "./AddressCreateJoinInput";
import { BookingStatus } from "@prisma/client";
import { BookingStatusEnum } from "../enums/BookingStatusEnum";

@ArgsType()
@InputType("BookingCreateInput")
export class BookingCreateInput {
  @Field((_type) => Int)
  vehicle_id?: number | null;

  @Field((_type) => Int)
  driver_id?: number | null;

  @Field((_type) => Date)
  pickup?: Date | null;

  @Field((_type) => Date)
  dropoff?: Date | null;

  @Field((_type) => Int)
  duration?: number | null;

  @Field((_type) => AddressCreateJoinInput, {
    nullable: false,
  })
  pickup_addr!: AddressCreateJoinInput;

  @Field((_type) =>  AddressCreateJoinInput, {
    nullable: false,
  })
  dest_addr!: AddressCreateJoinInput;
 
  @Field((_type) => String, {
    nullable: false,
  })
  dest_name!: string;
  
  @Field((_type) => String, {
    nullable: false,
  })
  dest_contact!: string;

  @Field((_type) => String)
  note?: string | null;

  @Field((_type) => String, {
    nullable: false,
  })
  parcel_type!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  parcel_weight!: string;

  @Field((_type) => Int)
  travellers?: number;

  @Field((_type) => Int)
  cancellation?: number;

  @Field((_type) => BookingStatusEnum)
  status?: BookingStatus;

  @Field((_type) => Int)
  payment?: number;
}
