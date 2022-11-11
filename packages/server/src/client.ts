import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line vars-on-top, no-var
  var prisma: PrismaClient | undefined;
}

// eslint-disable-next-line import/prefer-default-export
export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

export * from "@prisma/client";
