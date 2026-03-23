import { describe, it, expect } from "vitest";
import { getAllTags, getPostTags, normalizeTag } from "./tags";

describe("getAllTags", () => {
  it("タグの一覧が取得できる", async () => {
    const dummyPosts = [
      { data: { tags: ["TypeScript", "Android", "Rust"] } },
      { data: { tags: ["Java"] } },
    ] as any;
    const allTags = await getAllTags(dummyPosts);
    expect(allTags).toEqual([
      { origin: "TypeScript", display: "TypeScript", url: "typescript" },
      { origin: "Android", display: "Android", url: "android" },
      { origin: "Rust", display: "Rust", url: "rust" },
      { origin: "Java", display: "Java", url: "java" },
    ]);
  });
  it("重複したタグがある場合", async () => {
	const dummy = [
		{data: {tags: ["Rust", "programing"]}},
		{data: {tags: ["Rust", "Android"]}},
	] as any;
	const allTags = await getAllTags(dummy);
	expect(allTags).toEqual([
		{origin: "Rust", display: "Rust", url: "rust"},
		{origin: "programing", display: "programing", url: "programing"},
		{origin: "Android", display: "Android", url: "android"},
	]);
  });
  it("表記揺れがある場合", async () => {
	const dummy = [
		{data: {tags: ["Rust", "programing"]}},
		{data: {tags: ["rust", "Android"]}},
	] as any;
	const allTags = await getAllTags(dummy);
	expect(allTags).toEqual([
		{origin: "Rust", display: "Rust", url: "rust"},
		{origin: "programing", display: "programing", url: "programing"},
		{origin: "Android", display: "Android", url: "android"},
	]);
  });
  it("表記揺れに関してはノーマライズした上でURLが同じなら同じタグと判定する", async () => {
	// TODO: 表記揺れに関してprograming Programingと来た時はprograming表記になってしまうがこれをどう扱うかという問題がある
	const dummy = [
		{data: {tags: ["Rust", "programing"]}},
		{data: {tags: ["rust", "Android"]}},
		{data: {tags: ["Programing", "android"]}},
	] as any;
	const allTags = await getAllTags(dummy);
	expect(allTags).toEqual([
		{origin: "Rust", display: "Rust", url: "rust"},
		{origin: "programing", display: "programing", url: "programing"},
		{origin: "Android", display: "Android", url: "android"},
	]);
  });
});

describe("getPostTags", () => {
  it("タグが存在する場合、正規化されたタグ情報の配列を返す", () => {
    const post = {
      data: { tags: ["TypeScript", "  React JS  "] }
    } as any;
    const result = getPostTags(post);
    expect(result).toEqual([
      { origin: "TypeScript", display: "TypeScript", url: "typescript" },
      { origin: "  React JS  ", display: "React JS", url: "react-js" }
    ]);
  });

  it("タグが設定されていない場合、undefinedを返す", () => {
    const post = { data: {} } as any;
    const result = getPostTags(post);
    expect(result).toBeUndefined();
  });

  it("タグが空配列の場合、空配列を返す", () => {
    const post = { data: { tags: [] } } as any;
    const result = getPostTags(post);
    expect(result).toEqual([]);
  });
});

describe("normalizeTag", () => {
  it("前後の空白がトリムされること", () => {
    const result = normalizeTag("  hoge  ");
    expect(result).toEqual({ origin: "  hoge  ", display: "hoge", url: "hoge" });
  });

  it("大文字は小文字に変換されてurlになること", () => {
    const result = normalizeTag("TypeScript");
    expect(result).toEqual({ origin: "TypeScript", display: "TypeScript", url: "typescript" });
  });

  it("途中の空白はハイフンに変換されてurlになること", () => {
    const result = normalizeTag("Hello World");
    expect(result).toEqual({ origin: "Hello World", display: "Hello World", url: "hello-world" });
  });

  it("NFKC正規化が行われる（全角英数が半角になる等）こと", () => {
    const result = normalizeTag("Ｒｕｓｔ");
    expect(result).toEqual({ origin: "Ｒｕｓｔ", display: "Rust", url: "rust" });
  });
});
