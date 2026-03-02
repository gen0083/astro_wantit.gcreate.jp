// vitest.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    watch: true,
    include: ["src/**/*.{test,spec}.?(c|m)[jt]s?(x)"],
    // ② テスト・監視から「絶対に除外する」フォルダ
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/.git/**",
      "**/.astro/**", // Astroの一時ファイルも除外しておくと安全です
    ],
  },
});
