import { Field, InputType, Int } from "type-graphql";

@InputType("CreateBookingInput")
export class CreateBookingInput {
  @Field((_type) => Int)
  customer_id?: number | null;

  @Field((_type) => Int)
  user_id?: number | null;

  @Field((_type) => Int)
  vehicle_id?: number | null;

  @Field((_type) => Int)
  driver_id?: number | null;

  @Field((_type) => Date, {
    nullable: false,
  })
  pickup!: Date;

  @Field((_type) => Date, {
    nullable: false,
  })
  dropoff!: Date;

  @Field((_type) => Int)
  duration?: number | null;

  @Field((_type) => String, {
    nullable: false,
  })
  pickup_addr!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  dest_addr!: string;
 
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

  @Field((_type) => Int, {
    nullable: false,
  })
  travellers!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  cancellation!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  status!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  payment!: number;
}
