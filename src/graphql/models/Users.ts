import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Users", {
  simpleResolvers: true,
})
export class Users {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  id!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  user_id?: number | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  name?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  email?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  password?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  user_type?: string | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  group_id?: number | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  api_token!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  remember_token?: string | null;

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
}
