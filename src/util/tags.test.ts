import {describe, expect, it} from "vitest";
import {getAllTags, getPostTags, normalizeTag} from "./tags";

describe("getAllTags", () => {
  it("タグの一覧が取得できる", () => {
    const dummyPosts = [
      {data: {tags: ["TypeScript", "Android", "Rust"]}},
      {data: {tags: ["Java"]}},
    ] as any;
    const allTags = getAllTags(dummyPosts);
    expect(allTags).toEqual([
      {origin: "TypeScript", display: "TypeScript", url: "typescript", count: 1},
      {origin: "Android", display: "Android", url: "android", count: 1},
      {origin: "Rust", display: "Rust", url: "rust", count: 1},
      {origin: "Java", display: "Java", url: "java", count: 1},
    ]);
  });
  it("重複したタグがある場合", () => {
    const dummy = [
      {data: {tags: ["Rust", "programing"]}},
      {data: {tags: ["Rust", "Android"]}},
    ] as any;
    const allTags = getAllTags(dummy);
    expect(allTags).toEqual([
      {origin: "Rust", display: "Rust", url: "rust", count: 2},
      {origin: "programing", display: "programing", url: "programing", count: 1},
      {origin: "Android", display: "Android", url: "android", count: 1},
    ]);
  });
  it("表記揺れがある場合", () => {
    const dummy = [
      {data: {tags: ["Rust", "programing"]}},
      {data: {tags: ["rust", "Android"]}},
    ] as any;
    const allTags = getAllTags(dummy);
    expect(allTags).toEqual([
      {origin: "Rust", display: "Rust", url: "rust", count: 2},
      {origin: "programing", display: "programing", url: "programing", count: 1},
      {origin: "Android", display: "Android", url: "android", count: 1},
    ]);
  });
  it("表記揺れに関してはノーマライズした上でURLが同じなら同じタグと判定する", async () => {
    // TODO: 表記揺れに関してprograming Programingと来た時はprograming表記になってしまうがこれをどう扱うかという問題がある
    const dummy = [
      {data: {tags: ["Rust", "programing"]}},
      {data: {tags: ["rust", "Android"]}},
      {data: {tags: ["Programing", "android"]}},
    ] as any;
    const allTags = getAllTags(dummy);
    expect(allTags).toEqual([
      {origin: "Rust", display: "Rust", url: "rust", count: 2},
      {origin: "programing", display: "programing", url: "programing", count: 2},
      {origin: "Android", display: "Android", url: "android", count: 2},
    ]);
  });
  it("タグの出現回数(count)が正しく集計されること", () => {
    const dummy = [
      {data: {tags: ["A", "B"]}},
      {data: {tags: ["A", "C"]}},
      {data: {tags: ["A", "B"]}},
      {data: {tags: ["D"]}},
    ] as any;
    const allTags = getAllTags(dummy);
    expect(allTags).toEqual([
      {origin: "A", display: "A", url: "a", count: 3},
      {origin: "B", display: "B", url: "b", count: 2},
      {origin: "C", display: "C", url: "c", count: 1},
      {origin: "D", display: "D", url: "d", count: 1},
    ]);
  });
});

describe("getPostTags", () => {
  it("タグが存在する場合、正規化されたタグ情報の配列を返す", () => {
    const post = {
      data: {tags: ["TypeScript", "  React JS  "]}
    } as any;
    const result = getPostTags(post);
    expect(result).toEqual([
      {origin: "TypeScript", display: "TypeScript", url: "typescript", count: 1},
      {origin: "  React JS  ", display: "React JS", url: "react-js", count: 1}
    ]);
  });

  it("タグが設定されていない場合、空配列を返す", () => {
    const post = {data: {}} as any;
    const result = getPostTags(post);
    expect(result).toEqual([]);
  });

  it("タグが空配列の場合、空配列を返す", () => {
    const post = {data: {tags: []}} as any;
    const result = getPostTags(post);
    expect(result).toEqual([]);
  });
});

describe("normalizeTag", () => {
  it("前後の空白がトリムされること", () => {
    const result = normalizeTag("  hoge  ");
    expect(result).toEqual({origin: "  hoge  ", display: "hoge", url: "hoge", count: 1});
  });

  it("大文字は小文字に変換されてurlになること", () => {
    const result = normalizeTag("TypeScript");
    expect(result).toEqual({origin: "TypeScript", display: "TypeScript", url: "typescript", count: 1});
  });

  it("途中の空白はハイフンに変換されてurlになること", () => {
    const result = normalizeTag("Hello World");
    expect(result).toEqual({origin: "Hello World", display: "Hello World", url: "hello-world", count: 1});
  });

  it("NFKC正規化が行われる（全角英数が半角になる等）こと", () => {
    const result = normalizeTag("Ｒｕｓｔ");
    expect(result).toEqual({origin: "Ｒｕｓｔ", display: "Rust", url: "rust", count: 1});
  });
});
