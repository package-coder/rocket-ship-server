import { Field, Float, Int, ObjectType } from "type-graphql";

@ObjectType("Addresses")
export class Addresses {
  @Field((_type) => Int, { nullable: false })
  id!: number;

  @Field((_type) => Int)
  customer_id!: number | null;

  @Field((_type) => String, { nullable: false })
  barangay!: string;
  
  @Field((_type) => String, { nullable: false })
  type!: string;

  @Field((_type) => String, { nullable: false })
  municipality!: string;

  @Field((_type) => String, { nullable: false })
  province!: string;

  @Field((_type) => String, { nullable: false })
  region!: string;
  
  @Field((_type) => Float)
  longitude?: number | null;
  
  @Field((_type) => Float)
  latitude?: number | null;

  @Field((_type) => String)
  address?: string | null;

  @Field((_type) => Date)
  deleted_at?: Date | null;

  @Field((_type) => Date)
  created_at?: Date | null;

  @Field((_type) => Date)
  updated_at?: Date | null;
}
