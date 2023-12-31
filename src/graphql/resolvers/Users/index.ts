import { Args, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Users } from "../../models/Users";
import { CreateUserArgs } from "./args/CreateUserArgs";
import { Context } from "../../../context";
import { generateAccessToken, joinOrCreate } from "../../helpers";
import { LoginUserArgs } from "./args/LoginUserArgs";
import { compare, hash } from "bcrypt";
import { LoginUserOutput } from "../../output/LoginUserOutput";




@Resolver((_of) => Users)
export class UserResolver {
  @Mutation((_returns) => Users, {
    nullable: false,
  })
  async createUser(
    @Ctx() { prisma }: Context,
    @Args() args: CreateUserArgs,
  ): Promise<Users> {

    const userExists = await prisma.users.findFirst({
      where: { email: args.data.email }
    });

    if (userExists) throw new Error('Email already registered')

    const password = await hash(args.data.password, 12)

    const data = {
      ...args.data,
      name: `${args.data?.firstName} ${args.data.lastName}`,
      password
    }

    return await prisma.users.create({
      data: {
        ...data,
        home_address: joinOrCreate(data.home_address)
      },
      include: { home_address: true }
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

    return await prisma.users.findUnique({
      where: { id: user?.id },
      include: { home_address: true }
    });
  }
}