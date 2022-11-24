// https://astro.build/config
import image from "@astrojs/image";
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import * as dotenv from "dotenv";

dotenv.config();

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), partytown(), sitemap(), image(), react()],
  output: "server",
  adapter: vercel(),
});
