import { Args, Authorized, Ctx, Info, Mutation, Query, Resolver } from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Users } from "../../models/Users";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../helpers";
import { CreateUserArgs } from "./args/CreateUserArgs";
import { FindUserArgs } from "./args/FindUserArgs";
import { Context } from "../../../context";




@Resolver((_of) => Users)
export class UserResolver {
  @Mutation((_returns) => Users, {
    nullable: false,
  })
  async createUser(
    @Ctx() { prisma }: Context,
    @Args() args: CreateUserArgs,
  ): Promise<Users> {

    return prisma.users.create({ ...args });
  }
  
  @Authorized()
  @Query((_returns) => Users, { nullable: true })
  async findUserById(
    @Ctx() { prisma }: Context,
    @Args() { id }: FindUserArgs,
  ): Promise<Users | null> {

    return await prisma.users.findFirst({
      where: { id }
    });
  }
}