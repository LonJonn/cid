import * as trpcExpress from "@trpc/server/adapters/express";
import express from "express";

import { appRouter, createContext } from "@cid/server";

const app = express();

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

const PORT = 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT} 🚀`));
