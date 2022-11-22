import type { z } from "zod";

import { formatErrors } from "./format-errors";
import { publicSchema } from "./schema";

declare global {
  interface Window {
    ENV: z.infer<typeof publicSchema>;
  }

  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof publicSchema> {}
  }
}

export function parse() {
  if (typeof document !== "undefined" && !window.ENV) {
    throw new Error(
      "❌ window.ENV is not defined. Make sure you are passing public environment variables to the client."
    );
  }

  const _env = publicSchema.safeParse(typeof document === "undefined" ? process.env : window.ENV);

  if (!_env.success) {
    throw new Error(
      "❌ Invalid public environment variables:\n" + formatErrors(_env.error.format()).join("")
    );
  }

  return _env.data;
}
