import { z } from "zod";

export const publicSchema = z.object({
  EVENT_STAGE: z.enum(["PRE", "LIVE"]),
  ADMIN_LOCKED: z.enum(["TRUE", "FALSE"]),
});

export const secretSchema = z.object({
  DATABASE_URL: z.string().url(),
  API_URL: z.string().url(),
});
