import { Field, Int, ObjectType } from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@ObjectType("Users")
export class Users {
  @Field((_type) => Int, {
    nullable: false,
  })
  id!: number;

  @Field((_type) => Int, {
    nullable: true,
  })
  user_id?: number | null;

  @Field((_type) => String, {
    nullable: true,
  })
  name?: string | null;

  @Field((_type) => String, {
    nullable: true,
  })
  email?: string | null;

  @Field((_type) => String, {
    nullable: true,
  })
  password?: string | null;

  @Field((_type) => String, {
    nullable: true,
  })
  user_type?: string | null;

  @Field((_type) => Int, {
    nullable: true,
  })
  group_id?: number | null;

  @Field((_type) => String, {
    nullable: false,
  })
  api_token!: string;

  @Field((_type) => String, {
    nullable: true,
  })
  remember_token?: string | null;

  @Field((_type) => Date, {
    nullable: true,
  })
  created_at?: Date | null;

  @Field((_type) => Date, {
    nullable: true,
  })
  updated_at?: Date | null;

  @Field((_type) => Date, {
    nullable: true,
  })
  deleted_at?: Date | null;
}
