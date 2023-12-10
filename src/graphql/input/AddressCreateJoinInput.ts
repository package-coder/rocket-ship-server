import { Field, InputType, Int } from "type-graphql";
import { AddressCreateInput } from "./AddressCreateInput";


@InputType("AddressCreateJoinInput")
export class AddressCreateJoinInput {
  @Field(_type => Int)
  id?: number;

  @Field(_type => AddressCreateInput)
  data?: AddressCreateInput
}