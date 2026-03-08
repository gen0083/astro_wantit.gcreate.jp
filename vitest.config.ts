/// <reference types="vitest/config" />
import { getViteConfig } from "astro/config";

export default getViteConfig({
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
