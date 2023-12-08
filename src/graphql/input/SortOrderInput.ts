import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { SortOrder } from "../enums/SortOrder";
import { NullsOrder } from "../enums/NullsOrder";

@TypeGraphQL.InputType("SortOrderInput", {})
export class SortOrderInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => NullsOrder, {
    nullable: true
  })
  nulls?: "first" | "last" | undefined;
}
