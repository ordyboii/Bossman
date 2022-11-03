import { defineConfig } from 'astro/config';

// https://astro.build/config
import preact from "@astrojs/preact";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [preact()],
  output: "server",
  adapter: vercel()
});