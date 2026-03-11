import { describe, expect, it } from "vitest";

describe("関数の動作確認", () => {
  it("flatMap", () => {
    const a: { data: { a: string[] }[] } = {
      data: [{ a: [] }, { a: ["hoge", "fuga"] }, { a: ["one"] }],
    };
    const actual = [...new Set(a.data.flatMap((r) => r.a))];
    expect(actual).toEqual(["hoge", "fuga", "one"]);
  });
  it("objectの判定は中身が一緒でも異なる", () => {
    const a = { a: "a" };
    const b = { a: "a" };
    expect(a == b).toBe(false);
    expect(a === b).toBe(false);
  });
});
