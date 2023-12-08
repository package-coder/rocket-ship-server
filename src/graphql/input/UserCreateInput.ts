import { Field, InputType, Int } from "type-graphql";
import { UserTypeEnum } from "../enums/UserScalarFieldEnum";
import { AddressCreateInput } from "./AddressCreateInput";


@InputType("UserCreateInput", {})
export class UserCreateInput {
  @Field((_type) => Int, {
    nullable: true,
  })
  user_id?: number | undefined;

  @Field((_type) => String, {
    nullable: false,
  })
  firstName!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  lastName!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  email!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  password!: string;

  @Field((_type) => UserTypeEnum, {
    nullable: false,
  })
  user_type!: UserTypeEnum;

  @Field((_type) => Int)
  group_id?: number | undefined;

  @Field((_type) => String)
  api_token?: string;

  @Field(_type => AddressCreateInput, { nullable: false })
  homeAddress!: AddressCreateInput

  @Field(_type => AddressCreateInput)
  workAddress?: AddressCreateInput | null

  @Field((_type) => String)
  remember_token?: string | undefined;

  @Field((_type) => Date, {
    nullable: true,
  })
  created_at?: Date | undefined;

  @Field((_type) => Date, {
    nullable: true,
  })
  updated_at?: Date | undefined;

  @Field((_type) => Date, {
    nullable: true,
  })
  deleted_at?: Date | undefined;
}
