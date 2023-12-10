
import { ArgsType, Field } from "type-graphql";

import { BookingCreateInput } from "../../../input/BookingCreateInput";

@ArgsType()
export class CreateBookingArgs {
  @Field((_type) => BookingCreateInput, {
    nullable: false,
  })
  data!: BookingCreateInput;
}
