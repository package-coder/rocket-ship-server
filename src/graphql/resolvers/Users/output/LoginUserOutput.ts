import { ObjectType, Field, Int } from "type-graphql";
import { Users } from "../../../models/Users";

@ObjectType()
export class LoginUserOutput {
    @Field(_type => String, { nullable: false })
    token!: string
    
    @Field(_type => Users, { nullable: false })
    user!: Users
}
