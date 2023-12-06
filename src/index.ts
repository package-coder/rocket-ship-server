import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import { Prisma, PrismaClient } from "@prisma/client";
import { type AuthChecker, buildSchema } from 'type-graphql'
import { UserResolver } from "./graphql/resolvers/Users";
import express from "express";
import { DefaultArgs } from "@prisma/client/runtime/library";
import { IncomingMessage, ServerResponse } from "http";
import { context } from "./context";
import { GraphQLScalarType } from 'graphql'
import { DateTimeResolver } from 'graphql-scalars'
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { BookingResolver } from "./graphql/resolvers/Bookings";

const GRAPHQL_PATH = "/graphql";
const PORT = 3001

export interface Context {
    user?: any;
    prisma?: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
    req?: IncomingMessage,
    res?: ServerResponse<IncomingMessage>
};

const AppAuthChecker: AuthChecker<Context> = async (params, roles) => {

    console.log('auth checker')
    // console.log(params)
    return true;
}



async function main() {

    const app = express();
    const schema = await buildSchema({
        resolvers: [UserResolver, BookingResolver],
        scalarsMap: [{ type: GraphQLScalarType, scalar: DateTimeResolver }],
        validate: { forbidUnknownValues: false },
        nullableByDefault: true,
        authChecker: AppAuthChecker
    }); 

    app.use(cors({ origin: '*' }))
    app.use(cookieParser())
    const server = new ApolloServer({ schema, context: ({ req, res }) => ({ ...context, req, res }) });
    await server.start()
    server.applyMiddleware({ app, path: GRAPHQL_PATH, cors: false })

    app.listen(PORT, () => {
        console.log(`GraphQL server ready at http://localhost:${PORT}${GRAPHQL_PATH}`);
    })
}

main().catch(async (e) => {
    console.error(e)
    process.exit(1)
})
