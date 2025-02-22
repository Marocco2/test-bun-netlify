import { defineConfig } from "astro/config";

// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  experimental: {
    contentCollectionCache: true,
  },
  cacheDir: './.cache',
  integrations: [preact()]
});
