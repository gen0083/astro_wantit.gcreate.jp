import { describe, expect, it } from "vitest";
import { makePaginationLink } from "./pagination_helper";

describe("PaginationLink()", () => {
  it("Pageが空の場合", () => {
    const page = {
      data: [],
      start: 0,
      end: 0,
      total: 0,
      currentPage: 0,
      size: 10,
      lastPage: 0,
      url: {
        current: "",
        prev: undefined,
        next: undefined,
        first: undefined,
        last: undefined,
      },
    };
    expect(makePaginationLink({ page: page })).toEqual([
      {},
      {},
    ]);
  });

  it("Pageが表示数以下（デフォルト5表示のため3ページしかない場合）", () => {
    const page = {
      data: [0, 1, 2],
      start: 0,
      end: 2,
      total: 3,
      currentPage: 0,
      size: 5,
      lastPage: 2,
      url: {
        current: "/",
        prev: undefined,
        next: "./1",
        first: undefined,
        last: "./2",
      },
    };
    expect(makePaginationLink({ page })).toEqual([
      {},
    ]);
  });

  it("Pageが表示数より大きく、currentが2のとき", () => {
    const page = {
      data: [1, 2, 3, 4, 5, 6, 7],
      start: 0,
      end: 6,
      total: 7,
      currentPage: 1,
      size: 10,
      lastPage: 7,
      url: {
        current: "./2",
        prev: "./",
        next: "./3",
        first: "/",
        last: "./7",
      },
    };
    expect(makePaginationLink({ page })).toEqual([]);
  });

  it("0を含む範囲も正しく生成できること", () => {
    const page = {
      data: [1, 2, 3, 4, 5, 6, 7],
      start: 0,
      end: 6,
      total: 7,
      currentPage: 1,
      size: 10,
      lastPage: 7,
      url: {
        current: "./2",
        prev: "./",
        next: "./3",
        first: "/",
        last: "./7",
      },
    };
    expect(makePaginationLink({ page })).toEqual([-1, 0, 1]);
  });
});
