import { PrismaClient } from '@prisma/client'
import { Response, Request } from 'express'
import { Users } from './graphql/models/Users'
 
const prisma = new PrismaClient()

export interface Context {
  prisma: PrismaClient,
  res?: Response,
  req?: Request,
  payload?: { user: Users }
}

export const context: Context = {
  prisma: prisma,
}