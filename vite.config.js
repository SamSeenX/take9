import { defineConfig } from "vite";

export default defineConfig({
  build: {
    minify: "esbuild", // Faster and good compaction
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          "game-engine": ["./src/engine/Game.js"],
          "ui-core": [
            "./src/ui/ScreenManager.js",
            "./src/ui/Typewriter.js",
            "./src/ui/ThemeSelector.js",
            "./src/ui/SoundManager.js",
          ],
        },
      },
    },
  },
});
