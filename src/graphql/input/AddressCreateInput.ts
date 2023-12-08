import { Field, Float, InputType, Int } from "type-graphql";


@InputType("AddressCreateInput", {})
export class AddressCreateInput {
  @Field((_type) => String, { nullable: false })
  barangay!: string;

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
}
