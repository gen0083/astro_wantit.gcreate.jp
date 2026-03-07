import { describe, expect, it } from "vitest";
import { getCategorySlug, splitCategoryAndSlugFromPostId } from "./url";

describe("getCategorySlug", () => {
  it("最後の.mdだけ除いたものが返る", () => {
    const text = "smartphone/nexus6p_replace_battery/index.md";
    const result = getCategorySlug(text);
    expect(result).toEqual("smartphone/nexus6p_replace_battery/index");
  });
  it("index.mdがないパターン", () => {
    const text = "book/my-first-gtd.md";
    const result = getCategorySlug(text);
    expect(result).toEqual("book/my-first-gtd");
  });
  it("pathの途中にドットがあるパターン", () => {
    const text = "diy/h.hoge.md";
    const result = getCategorySlug(text);
    expect(result).toEqual("diy/h.hoge");
  });
});

describe("splitCategoryId", () => {
  it("categoryとidが取得できる", () => {
    const text = "diy/sample";
    const { category, slug } = splitCategoryAndSlugFromPostId(text);
    expect(category).toEqual("diy");
    expect(slug).toEqual("sample");
  });
  it("indexありのパターン", () => {
    const text = "diy/sample/index";
    const { category, slug } = splitCategoryAndSlugFromPostId(text);
    expect(category).toEqual("diy");
    expect(slug).toEqual("sample");
  });
});
