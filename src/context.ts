import { PrismaClient } from '@prisma/client'
import { Response, Request } from 'express'
 
const prisma = new PrismaClient()

export interface Context {
  prisma: PrismaClient,
  res?: Response,
  req?: Request
}

export const context: Context = {
  prisma: prisma,
}