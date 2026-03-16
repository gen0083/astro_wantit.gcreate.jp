import { describe, expect, it } from "vitest";
import { makePaginationLink } from "./pagination_helper";

describe("PaginationLink()", () => {
  it("Pageが空の場合", () => {
    const page = {
      // collectionの配列
      data: [],
      // collectionのstart（1ページに10兼表示の場合で、2ページめだと11になる）
      start: 0,
      // collectionのend（最後のcollectionが412件あって、最後のページを表示中なら412になる）
      end: -1,
      // collectionのtotal（ページのトータルではない）
      total: 0,
      // 現在表示中のページ（こちらは1startで、ページ番号が入る）
      currentPage: 1,
      // 1ページに表示するcollection数（デフォルトで10）
      size: 10,
      // 最後のページ番号
      lastPage: 1,
      url: {
        current: "/",
        prev: undefined,
        next: undefined,
        first: undefined,
        last: undefined,
      },
    };
    expect(makePaginationLink({ page: page })).toEqual([]);
  });

  it("1, ..., 4, 5, [6], 7, 8, ..., 40", () => {
    const page = {
      data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 40],
      start: 0,
      end: 13,
      total: 141,
      currentPage: 6,
      size: 5,
      lastPage: 40,
      url: {
        current: "/6",
        prev: "/5",
        next: "/7",
        first: undefined,
        last: "/40",
      },
    };
    expect(makePaginationLink({ page })).toEqual([
      { label: "1", url: "/", isActive: false },
      { label: "...", url: undefined, isActive: false },
      { label: "4", url: "/4/", isActive: false },
      { label: "5", url: "/5/", isActive: false },
      { label: "6", url: undefined, isActive: true },
      { label: "7", url: "/7/", isActive: false },
      { label: "8", url: "/8/", isActive: false },
      { label: "...", url: undefined, isActive: false },
      { label: "40", url: "/40/", isActive: false },
    ]);
  });

  it("1, [2], 3, 4, ..., 7", () => {
    const page = {
      data: [1, 2, 3, 4, 5, 6, 7],
      start: 0,
      end: 6,
      total: 77,
      currentPage: 2,
      size: 10,
      lastPage: 7,
      url: {
        current: "/2",
        prev: "/",
        next: "/3",
        first: "/",
        last: "/7",
      },
    };
    expect(makePaginationLink({ page, num: 3 })).toEqual([
      { label: "1", url: "/", isActive: false },
      { label: "2", url: undefined, isActive: true },
      { label: "3", url: "/3/", isActive: false },
      { label: "4", url: "/4/", isActive: false },
      { label: "...", url: undefined, isActive: false },
      { label: "7", url: "/7/", isActive: false },
    ]);
  });

  it("1, ..., 4, 5, [6], 7）", () => {
    const page = {
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      start: 1,
      end: 7,
      total: 77,
      currentPage: 6,
      size: 10,
      lastPage: 7,
      url: {
        current: "/6",
        prev: "/5",
        next: "/7",
        first: "/",
        last: "/7",
      },
    };
    expect(makePaginationLink({ page, num: 3 })).toEqual([
      { label: "1", url: "/", isActive: false },
      { label: "...", url: undefined, isActive: false },
      { label: "4", url: "/4/", isActive: false },
      { label: "5", url: "/5/", isActive: false },
      { label: "6", url: undefined, isActive: true },
      { label: "7", url: "/7/", isActive: false },
    ]);
  });

  it("1, 2, [3], 4(ページ表示数に満たない場合)", () => {
    const page = {
      data: [1, 2, 3, 4],
      start: 1,
      end: 4,
      total: 44,
      currentPage: 3,
      size: 10,
      lastPage: 4,
      url: {
        current: "/3",
        prev: "/2",
        next: "/4",
        first: "/",
        last: "/4",
      },
    };
    expect(makePaginationLink({ page, num: 3 })).toEqual([
      { label: "1", url: "/", isActive: false },
      { label: "2", url: "/2/", isActive: false },
      { label: "3", url: undefined, isActive: true },
      { label: "4", url: "/4/", isActive: false },
    ]);
  });
});
