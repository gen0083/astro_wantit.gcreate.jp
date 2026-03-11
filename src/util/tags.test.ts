import { describe, it, expect } from "vitest";
import { getAllTags } from "./tags";

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
	const dummy = [
		{data: {tags: ["Rust", "programing"]}},
		{data: {tags: ["rust", "Android"]}},
		{data: {tags: ["r u s t", "android"]}},
	] as any;
	const allTags = await getAllTags(dummy);
	expect(allTags).toEqual([
		{origin: "Rust", display: "Rust", url: "rust"},
		{origin: "programing", display: "programing", url: "programing"},
		{origin: "Android", display: "Android", url: "android"},
	]);
  });
});
