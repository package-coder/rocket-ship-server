
import { ArgsType, Field } from "type-graphql";
import { CreateBookingInput } from "../input/CreateBookingInput";


@ArgsType()
export class CreateBookingArgs {
  @Field((_type) => CreateBookingInput, {
    nullable: false,
  })
  data!: CreateBookingInput;
}
