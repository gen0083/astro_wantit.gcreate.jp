import { describe, expect, it } from "vitest";
import {
  getAllTags,
  getCollectionEntryPost,
  getSummary,
  toParagraphs,
} from "./contents";

describe("getSummary()", () => {
  describe("descriptionがあるパターン", () => {
    it("descriptionを返す", () => {
      const post = {
        data: { description: "test" },
        body: "body",
      } as any;
      const result = getSummary(post);
      expect(result).toBe("test");
    });
    it("両方含まれている場合descriptionを優先する", () => {
      const post = {
        data: { description: "test" },
        body: `hoge <!-- more -->body`,
      } as any;
      const result = getSummary(post);
      expect(result).toBe("test");
    });
  });
  describe("moreコメントタグ", () => {
    it("<!--more-->があればその前を返す", () => {
      const post = {
        data: {},
        body: "hoge<!--more-->本文",
      } as any;
      const result = getSummary(post);
      expect(result).toBe("hoge");
    });

    it("<!-- more -->と空白が含まれていてもその前半になる", () => {
      const post = {
        data: {},
        body: `hoge fuga  <!-- more --> body`,
      } as any;
      const result = getSummary(post);
      expect(result).toBe("hoge fuga");
    });

    it("改行コードが含まれていても取得できる", () => {
      const post = {
        data: {},
        body: `hoge\nfuga\ntake\n<!-- more --> # h1\n\n text`.trim(),
      } as any;
      const result = getSummary(post);
      expect(result).toBe(`hoge\nfuga\ntake`);
    });
  });
});

describe("toParagraphs", () => {
  it("改行コードで分割できる", () => {
    const data = "1\n2\n3";
    const result = toParagraphs(data);
    expect(result).toEqual(["1", "2", "3"]);
  });
  it("前後の改行コードは無視される", () => {
    const data = "\n\n\n1\n2\n\n";
    const result = toParagraphs(data);
    expect(result).toEqual(["1", "2"]);
  });
  it("途中の無駄な改行は無視される", () => {
    const data = "1\n\n\n2";
    const result = toParagraphs(data);
    expect(result).toEqual(["1", "2"]);
  });
});

describe("getCollectionEntryPost", () => {
  it("test", async () => {
    const allPosts = await getCollectionEntryPost();
    expect(allPosts).has("category");
  });
});
