import { ArgsType, Field } from "type-graphql";


@ArgsType()
export class LoginUserArgs {
  @Field((_type) => String, { nullable: false })
  email!: string;

  @Field((_type) => String, { nullable: false })
  password!: string;
}
