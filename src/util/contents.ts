import type { CollectionEntry } from "astro:content";

export const toParagraphs = (text: string): string[] => {
  return text
    .split("\n")
    .map((p) => p.trim())
    .filter((p) => p != "");
};

export const getSummary = (post: CollectionEntry<"post">): string => {
  const description = post.data.description;
  if (description) return description;
  // <!-- more -->があればmoreまで(半角スペースが入っている可能性があるので正規表現を使う)
  const [beforeMore] = post.body?.split(/<!--\s*more\s*-->/) ?? [];
  if (beforeMore) return beforeMore.trim();
  // 上記のパターンで解決しなければbodyの100文字文を使う
  return post.body?.slice(0, 100).trim() ?? "";
};
