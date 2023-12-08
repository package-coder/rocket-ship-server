import { Field, Int, ObjectType } from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Addresses } from "./Addresses";

@ObjectType("Users")
export class Users {
  @Field((_type) => Int, { nullable: false })
  id!: number;

  @Field((_type) => Int)
  user_id!: number | null;

  @Field((_type) => String, { nullable: true })
  firstName?: string | null;

  @Field((_type) => String, { nullable: true })
  lastName?: string | null;

  @Field((_type) => String)
  email?: string | null;

  @Field((_type) => String)
  password?: string | null;

  @Field((_type) => String)
  user_type?: string | null;

  @Field((_type) => Int)
  group_id?: number | null;

  @Field(_type => Addresses)
  homeAddress?: Addresses | null

  @Field(_type => Addresses)
  workAddress?: Addresses | null

  @Field((_type) => String)
  api_token?: string | null;

  @Field((_type) => String)
  remember_token?: string | null;

  @Field((_type) => Date)
  created_at?: Date | null;

  @Field((_type) => Date)
  updated_at?: Date | null;

  @Field((_type) => Date)
  deleted_at?: Date | null;
}
