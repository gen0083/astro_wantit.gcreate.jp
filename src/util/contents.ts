import { getCollection, type CollectionEntry } from "astro:content";
import { checkSlugIsUnique } from "./check";
import { splitCategoryAndSlugFromPostId } from "./url";
import type { TagInformation } from "@/constants/types";

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

/** CollectionEntry<"post">にファイルパスに関連する情報を付け加えたもの */
export type CollectionEntryPost = CollectionEntry<"post"> & {
  category: string;
};

export const getCollectionEntryPost = async (): Promise<
  CollectionEntryPost[]
> => {
  const allPosts = await getCollection("post");
  checkSlugIsUnique(allPosts);
  return allPosts.map((post) => {
    const { category, slug } = splitCategoryAndSlugFromPostId(post.id);
    return {
      ...post,
      category,
    };
  });
};

/**
 * urlを取得する（末尾のスラッシュを必ずつけるように返す）
 * @param slug 記事のリンク先
 * @returns 先頭と末尾にスラッシュを必ずつけたurl
 */
export const getLinkUrl = (slug: string) => {
  const start = slug.startsWith('/') ? slug : `/${slug}`;
  return start.endsWith('/') ? start : `${start}/`;
};
