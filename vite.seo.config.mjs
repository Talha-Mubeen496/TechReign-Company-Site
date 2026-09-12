// Builds src/seo/routes.ts on its own so scripts/prerender.mjs can import the
// route manifest from Node. publicDir is off: this bundle is a build artifact,
// not a site, and copying 22MB of images into it would be pure waste.
import { defineConfig } from 'vite'

export default defineConfig({
  publicDir: false,
  build: {
    ssr: 'src/seo/routes.ts',
    outDir: '.seo-build',
    emptyOutDir: true,
  },
})
