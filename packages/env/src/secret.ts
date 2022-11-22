import type { z } from "zod";

import { formatErrors } from "./format-errors";
import { secretSchema } from "./schema";

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof secretSchema> {}
  }
}

export function parse() {
  if (typeof document !== "undefined") {
    throw new Error("❌ Trying to access a secret key on client.");
  }

  const _env = secretSchema.safeParse(process.env);

  if (!_env.success) {
    throw new Error(
      "❌ Invalid secret environment variables:\n" + formatErrors(_env.error.format()).join("\n")
    );
  }

  return _env.data;
}
