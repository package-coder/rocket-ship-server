
import { ArgsType, Field } from "type-graphql";

import { UserCreateInput } from "../input/UserCreateInput";

@ArgsType()
export class CreateUserArgs {
  @Field((_type) => UserCreateInput, {
    nullable: false,
  })
  data!: UserCreateInput;
}
