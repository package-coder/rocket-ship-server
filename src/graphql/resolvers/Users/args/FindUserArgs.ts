
import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ArgsType()
export class FindUserArgs {
    @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
        nullable: false,
    })
    id!: number;
}
