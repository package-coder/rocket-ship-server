
import { Int, ArgsType, Field } from "type-graphql";

@ArgsType()
export class FindUserArgs {
    @Field((_type) => Int, {
        nullable: false,
    })
    id!: number;
}
