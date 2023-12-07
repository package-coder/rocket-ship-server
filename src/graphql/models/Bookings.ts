import { Field, Int, ObjectType } from "type-graphql";

@ObjectType("Bookings")
export class Bookings {
  @Field((_type) => Int, {
    nullable: false,
  })
  id!: number;

  @Field((_type) => Int)
  customer_id?: number | null;

  @Field((_type) => Int)
  user_id?: number | null;

  @Field((_type) => Int)
  vehicle_id?: number | null;

  @Field((_type) => Int)
  driver_id?: number | null;

  @Field((_type) => Date)
  pickup!: Date | null;

  @Field((_type) => Date)
  dropoff!: Date | null;

  @Field((_type) => Int)
  duration?: number | null;

  @Field((_type) => String)
  pickup_addr?: string | null;

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

  @Field((_type) => Int)
  travellers?: number | null;

  @Field((_type) => Int)
  cancellation?: number | null;

  @Field((_type) => Int)
  status?: number | null;

  @Field((_type) => Int)
  payment?: number | null;

  @Field((_type) => Date)
  created_at?: Date | null;

  @Field((_type) => Date)
  updated_at?: Date | null;

  @Field((_type) => Date)
  deleted_at?: Date | null;
}
