import * as TypeGraphQL from "type-graphql";

export enum UserTypeEnum {
  SUPER_ADMIN = "S",
  CUSTOMER = "C",
  DRIVER = "D",
}
TypeGraphQL.registerEnumType(UserTypeEnum, {
  name: "UserTypeEnum",
});


export enum UsersScalarFieldEnum {
  id = "id",
  user_id = "user_id",
  firstName = "firstName",
  lastName = "lastName",
  name = "name",
  email = "email",
  home_address_id = "home_address_id",
  work_address_id = "work_address_id",
  password = "password",
  user_type = "user_type",
  group_id = "group_id",
  api_token = "api_token",
  remember_token = "remember_token",
  created_at = "created_at",
  updated_at = "updated_at",
  deleted_at = "deleted_at"
}
TypeGraphQL.registerEnumType(UsersScalarFieldEnum, {
  name: "UsersScalarFieldEnum",
  description: undefined,
});
