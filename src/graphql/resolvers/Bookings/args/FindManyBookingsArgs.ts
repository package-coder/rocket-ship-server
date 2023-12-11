import * as TypeGraphQL from "type-graphql";
import { BookingsOrderByInput } from "../../../input/BookingsOrderByInput";

@TypeGraphQL.ArgsType()
export class FindManyBookingsArgs {
  @TypeGraphQL.Field(_type => [BookingsOrderByInput], {
    nullable: true
  })
  orderBy?: BookingsOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;
}
