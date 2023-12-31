import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";
import type { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import { SignOptions, sign } from "jsonwebtoken";
import { auth_config } from "../../constants";

export function transformInfoIntoPrismaArgs(
  info: GraphQLResolveInfo,
): Record<string, any> {
  const fields: Record<string, any> = graphqlFields(
    // suppress GraphQLResolveInfo types issue
    info as any,
    {},
    {
      excludedFields: ["__typename"],
      processArguments: true,
    },
  );
  return transformFields(fields);
}

function transformFields(fields: Record<string, any>): Record<string, any> {
  return Object.fromEntries(
    Object.entries(fields).map<[string, any]>(([key, value]) => {
      if (Object.keys(value).length === 0) {
        return [key, true];
      }
      if ("__arguments" in value) {
        return [
          key,
          Object.fromEntries(
            value.__arguments.map((argument: object) => {
              const [[key, { value }]] = Object.entries(argument);
              return [key, value];
            }),
          ),
        ];
      }
      return [key, transformFields(value)];
    }),
  );
}

export function getPrismaFromContext(context: any) {
  const prismaClient = context["prisma"];
  if (!prismaClient) {
    throw new Error(
      'Unable to find Prisma Client in GraphQL context. Please provide it under the `context["prisma"]` key.',
    );
  }
  return prismaClient as PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;
}

export function transformCountFieldIntoSelectRelationsCount(_count: object) {
  return {
    include: {
      _count: {
        select: {
          ...Object.fromEntries(
            Object.entries(_count).filter(([_, v]) => v != null),
          ),
        },
      },
    },
  };
}

export function joinOrCreate(value: { id?: number, data?: any }) {
  if(value.id) return { connect: { id: value.id } }
  return { create: value.data }
}

export const generateAccessToken = (payload: string | object | Buffer, options?: SignOptions) => {
  return sign(payload, auth_config.ACCESS_TOKEN_SECRET, options)
}
