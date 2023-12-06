import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Prisma, PrismaClient } from "@prisma/client";
import { expressjwt } from "express-jwt";
import { type AuthChecker, buildSchema } from 'type-graphql'
import { UserResolver } from "./graphql/resolvers/Users";
import express, { type Request, type Response } from "express";
import { DefaultArgs } from "@prisma/client/runtime/library";
import { IncomingMessage, ServerResponse } from "http";

const GRAPHQL_PATH = "/graphql";

export interface Context {
    user?: any;
    prisma?: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
    req?: IncomingMessage,
    res?: ServerResponse<IncomingMessage>
};

const AppAuthChecker: AuthChecker<Context> = async (params, roles) => {

    console.log('auth checker')
    console.log(params)
    return true;
}

const prisma = new PrismaClient();


async function main() {

    const app = express();
    const schema = await buildSchema({
        resolvers: [UserResolver],
        validate: false
    });

    const server = new ApolloServer({
        schema,
        context: { prisma }
    });
    await server.start()

    server.applyMiddleware({ app })

    // app.use(
    //     GRAPHQL_PATH,
    //     expressjwt({
    //       secret: "TypeGraphQL",
    //       credentialsRequired: false,
    //       algorithms: ['ES256']
    //     }),
    // );

    app.listen({ port: 4004 }, () => {
        console.log(`GraphQL server ready at http://localhost:4000${GRAPHQL_PATH}`);
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
