import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Vehicles_meta", {
  simpleResolvers: true,
})
export class Vehicles_meta {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  id!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  vehicle_id!: number;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  type!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  key!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  value?: string | null;

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
}
