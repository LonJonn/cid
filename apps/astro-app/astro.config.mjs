import node from "@astrojs/node";
import { defineConfig } from "astro/config";
import * as dotenv from "dotenv";

dotenv.config();

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
