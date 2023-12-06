import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Vehicles", {
  simpleResolvers: true,
})
export class Vehicles {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  id!: number;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  make_name?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  model_name?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  color_name?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  year?: string | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  group_id?: number | null;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  lic_exp_date?: Date | null;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  reg_exp_date?: Date | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  vehicle_image?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  engine_type?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  horse_power?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  vin?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  license_plate!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  mileage?: number | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  in_service?: number | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  user_id?: number | null;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  created_at?: Date | null;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updated_at?: Date | null;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  deleted_at?: Date | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  int_mileage?: number | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  type_id?: number | null;
}
