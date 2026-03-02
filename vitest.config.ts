// vitest.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // ブラウザ固有のAPIを使わない純粋なロジックなら 'node' でOK
    environment: "node",
    watch: true,
  },
});
