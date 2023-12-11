import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from 'type-graphql'
import express from "express";
import { context } from "./context";
import { GraphQLScalarType } from 'graphql'
import { DateTimeResolver } from 'graphql-scalars'
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authChecker from "./authChecker";
import { createServer } from 'node:http'
import { BookingResolver } from "./graphql/resolvers/Bookings";
import { UserResolver } from "./graphql/resolvers/Users";

const GRAPHQL_PATH = "/graphql";
const PORT = 3001



async function main() {
  const app = express();

  app.use(cors({ origin: '*' }))
  app.use(cookieParser())

  const schema = await buildSchema({
    resolvers: [
      BookingResolver,
      UserResolver,
    ],
    scalarsMap: [{ type: GraphQLScalarType, scalar: DateTimeResolver }],
    validate: { forbidUnknownValues: false },
    nullableByDefault: true,
    authChecker
  });

  
  const server = new ApolloServer({ schema, context: ({ req, res }) => ({ ...context, req, res }) });
  await server.start()
  server.applyMiddleware({ app, path: GRAPHQL_PATH, cors: false })

  app.listen(PORT, () => console.log(`GraphQL server ready at http://localhost:${PORT}${GRAPHQL_PATH}`))
}

main().catch(async (e) => {
  console.error(e)
  process.exit(1)
})
