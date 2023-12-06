import * as TypeGraphQL from "type-graphql";
import { UserTypeEnum } from "../enums/UserScalarFieldEnum";


@TypeGraphQL.InputType("UserCreateInput", {})
export class UserCreateInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  user_id?: number | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  email!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  password!: string;

  @TypeGraphQL.Field((_type) => UserTypeEnum, {
    nullable: false,
  })
  user_type!: UserTypeEnum;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  group_id?: number | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  api_token!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  remember_token?: string | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  deleted_at?: Date | undefined;
}
