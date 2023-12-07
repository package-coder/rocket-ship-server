import { Arg, Args, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Users } from "../../models/Users";
import { CreateUserArgs } from "./args/CreateUserArgs";
import { FindUserArgs } from "./args/FindUserArgs";
import { Context } from "../../../context";
import { generateAccessToken } from "../../helpers";
import { LoginUserArgs } from "./args/LoginUserArgs";
import { compare, hash } from "bcrypt";
import { LoginUserOutput } from "./output/LoginUserOutput";




@Resolver((_of) => Users)
export class UserResolver {
  @Mutation((_returns) => Users, {
    nullable: false,
  })
  async createUser(
    @Ctx() { prisma }: Context,
    @Args() { data: user }: CreateUserArgs,
  ): Promise<Users> {

    const userExists = await prisma.users.findFirst({
      where: { email: user.email }
    });

    if (userExists) throw new Error('Email already registered')

    const api_token = generateAccessToken({ user }, { expiresIn: '30d' })
    const password = await hash(user.password, 12)

    const data = {
      ...user,
      api_token,
      password
    }

    return prisma.users.create({ data });
  }

  @Authorized()
  @Query((_returns) => Users, { nullable: true })
  async getUserById(
    @Ctx() { prisma }: Context,
    @Args() { id }: FindUserArgs,
  ): Promise<Users | null> {

    return await prisma.users.findFirst({
      where: { id }
    });
  }

  @Mutation((_returns) => LoginUserOutput)
  async loginUser(
    @Ctx() { prisma }: Context,
    @Args() { email, password }: LoginUserArgs
  ): Promise<LoginUserOutput> {

    const user = await prisma.users.findFirst({
      where: { email }
    });

    if (!user)
      throw new Error('Invalid Credentials')
    if (!await compare(password, user?.password as string))
      throw new Error('Invalid Credentials')

    const token = generateAccessToken({ user }, { expiresIn: '7d' })
    return {
      token,
      user
    };
  }

  @Authorized()
  @Query((_returns) => Users, { nullable: false })
  async getSession(
    @Ctx() { prisma, payload }: Context,
  ): Promise<Users | null> {
    const user = payload?.user

    return await prisma.users.findFirst({
      where: { id: user?.id }
    });
  }
}