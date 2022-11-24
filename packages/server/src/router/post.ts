import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const postRouter = {
  public: router({
    all: publicProcedure.query(({ ctx }) => {
      console.log("HEY");
      return ctx.prisma.post.findMany();
    }),
    byId: publicProcedure.input(z.number()).query(({ ctx, input }) => {
      return ctx.prisma.post.findFirst({ where: { id: input } });
    }),
  }),
};
