import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Addresses", {
  simpleResolvers: true,
})
export class Addresses {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  id!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  customer_id?: number | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  address?: string | null;

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
