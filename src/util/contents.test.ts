import {describe, expect, it} from "vitest";
import {getCollectionEntryPost, getLinkUrl, getPostUrl, getSummary, toParagraphs,} from "./contents";
import type {CollectionEntry} from "astro:content";

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
  // 実データからカテゴリが設定されているかのテストを行う
  // 型で防いでいるのだから不要ではと思うものの、意味はあるらしい
  it("test", async () => {
    const allPosts = await getCollectionEntryPost();
    allPosts.forEach((post) => {
      // カテゴリがちゃんと設定されているか
      expect(post, `error on ${post.filePath}`).toHaveProperty("category");
      // カテゴリに文字列がちゃんと設定されているか
      expect(post.category.trim().length).toBeGreaterThan(0);
    });
  });
});

describe("getLinkUrl", () => {
  it("urlを渡すと/を含めたURLを返す", () => {
    expect(getLinkUrl("hoge")).toEqual("/hoge/");
  });
  it("先頭に/がついているときに重複してつけない", () => {
    expect(getLinkUrl("/hoge")).toEqual("/hoge/");
  });
  it("末尾に/がついているときに重複してつけない", () => {
    expect(getLinkUrl("hoge/")).toEqual("/hoge/");
  });
  it("階層のある相対パスが渡された場合も先頭と末尾に/をつけて返す", () => {
    expect(getLinkUrl("hoge/fuga")).toEqual("/hoge/fuga/");
  });
  it("./や../を含むパスが渡された場合はエラーを投げる", () => {
    expect(() => getLinkUrl("./hoge")).toThrowError();
    expect(() => getLinkUrl("../hoge")).toThrowError();
    expect(() => getLinkUrl("hoge/../fuga")).toThrowError();
  });
});

describe("getPostUrl", () => {
  it("slugが設定されている場合はslugをベースにしたURLを返す", () => {
    const post = {
      id: "fallback-id",
      data: {slug: "custom-slug"}
    } as CollectionEntry<"post">;
    expect(getPostUrl(post)).toEqual("/custom-slug/");
  });

  it("slugが設定されていない場合はidをベースにしたURLを返す", () => {
    const post = {
      id: "fallback-id",
      data: {}
    } as CollectionEntry<"post">;
    expect(getPostUrl(post)).toEqual("/fallback-id/");
  });

  it("相対パスの指定子が含まれるslugが設定されている場合はエラーを投げる", () => {
    const post = {
      id: "fallback-id",
      data: {slug: "../custom-slug"}
    } as CollectionEntry<"post">;
    expect(() => getPostUrl(post)).toThrowError();
  });
});
