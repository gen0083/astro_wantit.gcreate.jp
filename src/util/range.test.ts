// src/utils/pagination.test.ts
import { describe, expect, it } from "vitest";
import { range } from "./range";

describe("range()", () => {
  it("指定した範囲の数値配列を生成できること", () => {
    // 3から6まで
    expect(range({ start: 3, end: 6 })).toEqual([3, 4, 5, 6]);
  });

  it("開始と終了が同じ場合は1つだけ要素を返すこと", () => {
    expect(range({ start: 5, end: 5 })).toEqual([5]);
  });

  it("開始が終了より大きい場合は空配列を返すこと", () => {
    expect(range({ start: 10, end: 5 })).toEqual([]);
  });

  it("0を含む範囲も正しく生成できること", () => {
    expect(range({ start: -1, end: 2 })).toEqual([-1, 0, 1, 2]);
  });
});
