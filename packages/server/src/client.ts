import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

if (!("document" in globalThis)) {
  prisma = global.prisma || new PrismaClient();

  if (process.env.NODE_ENV !== "production") {
    global.prisma = prisma;
  }
}

export { prisma };
export * from "@prisma/client";
