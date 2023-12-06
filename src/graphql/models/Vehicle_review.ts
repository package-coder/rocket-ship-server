import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Vehicle_review", {
  simpleResolvers: true,
})
export class Vehicle_review {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  id!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  vehicle_id!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  user_id?: number | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  reg_no?: string | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  kms_outgoing?: number | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  kms_incoming?: number | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  fuel_level_out?: number | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  fuel_level_in?: number | null;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  datetime_outgoing?: Date | null;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  datetime_incoming?: Date | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  petrol_card?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  lights?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  invertor?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  car_mats?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  int_damage?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  int_lights?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  ext_car?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  tyre?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  ladder?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  leed?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  power_tool?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  ac?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  head_light?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  lock?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  windows?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  condition?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  oil_chk?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  suspension?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  tool_box?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  image?: string | null;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  deleted_at?: Date | null;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  created_at?: Date | null;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updated_at?: Date | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  udf?: string | null;
}
