import { type inferAsyncReturnType } from "@trpc/server";
import { type CreateExpressContextOptions } from "@trpc/server/adapters/express";

import { prisma } from "@cid/db";

type Session = {
  expries: string;
  user: {
    id: string;
    name: string;
    imageUrl: string;
  };
};

/**
 * Replace this with an object if you want to pass things to createContextInner
 */
type CreateContextOptions = {
  session: Session | null;
};

/** Use this helper for:
 *  - testing, where we dont have to Mock Next.js' req/res
 *  - trpc's `createSSGHelpers` where we don't have req/res
 * @see https://beta.create.t4.gg/en/usage/trpc#-servertrpccontextts
 */
export async function createContextInner(opts: CreateContextOptions) {
  return {
    session: opts.session,
    prisma,
  };
}

/**
 * This is the actual context you'll use in your router
 * @link https://trpc.io/docs/context
 **/
export const createContext = async (opts: CreateExpressContextOptions) => {
  const session = await getSession(opts.req.headers.authorization);

  return await createContextInner({
    session,
  });
};

export type Context = inferAsyncReturnType<typeof createContext>;

/** Stub */

async function getSession(accessToken?: string): Promise<Session | null> {
  if (!accessToken) {
    return null;
  }

  return {
    expries: "",
    user: {
      id: `id:${accessToken}`,
      name: "Leon",
      imageUrl: "",
    },
  };
}
