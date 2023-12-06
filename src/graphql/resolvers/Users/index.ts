import { Args, Authorized, Ctx, Info, Mutation, Query, Resolver } from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Users } from "../../models/Users";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../helpers";
import { CreateUserArgs } from "./args/CreateUserArgs";
import { FindUserArgs } from "./args/FindUserArgs";




@Resolver((_of) => Users)
export class UserResolver {
  @Mutation((_returns) => Users, {
    nullable: false,
  })
  async createUser(
    @Ctx() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: CreateUserArgs,
  ): Promise<Users> {
    const { _count } = transformInfoIntoPrismaArgs(info);

    return getPrismaFromContext(ctx).users.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
  
  // @Authorized()
  @Query((_returns) => Users, { nullable: true })
  async findUserById(
    @Ctx() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() { id }: FindUserArgs,
  ): Promise<Users | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    console.log(ctx)
    return await getPrismaFromContext(ctx).users.findFirst({
      where: { id },
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}