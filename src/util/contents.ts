import {type CollectionEntry, getCollection} from "astro:content";
import {checkSlugIsUnique} from "./check";
import {splitCategoryAndSlugFromPostId} from "./url";
import {calculateTagsOverlapCount, getPostTags} from "@/util/tags.ts";

/**
 * 改行コードで区切られた文字列を段落ごとの配列に分割する。
 * 前後や途中の無駄な改行（空行）は無視される。
 * @param text 分割元の文字列
 * @returns 余分な空白や空行を取り除いた段落の配列
 */
export const toParagraphs = (text: string): string[] => {
  return text
    .split("\n")
    .map((p) => p.trim())
    .filter((p) => p != "");
};

/**
 * 記事のサマリー（概要）を取得する。
 * 1. frontmatter の `description` が設定されていればそれを最優先して返す。
 * 2. 本文中に `<!-- more -->` コメントがある場合は、その前までの内容を返す（空白や改行を含んでいても取得可能）。
 * 3. どちらもない場合は、本文の先頭100文字を返す。
 * @param post 記事データ
 * @returns サマリー文字列
 */
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

/**
 * 全記事（post）を取得し、ファイルパスからカテゴリ情報を付与して返す。
 * 取得時に、すべての記事で slug に重複がないかのバリデーションを実行する。
 * @returns カテゴリ情報が付与された記事データの配列
 */
export const getCollectionEntryPost = async (): Promise<
  CollectionEntryPost[]
> => {
  const allPosts = await getCollection("post");
  checkSlugIsUnique(allPosts);
  return allPosts.map((post) => {
    const {category, slug} = splitCategoryAndSlugFromPostId(post.id);
    return {
      ...post,
      category,
    };
  });
};

/**
 * urlを取得する。
 * 渡された文字列の先頭と末尾に `/` が必ずつくように整形して返す。（既に付いている場合は重複して付けない）
 * ※注意: `./` や `../` を含む相対パスの解決は行いません。ルートからのパス（またはslug）を渡してください。
 * @param slug 記事のリンク先となる文字列
 * @returns 先頭と末尾にスラッシュが付加されたURL文字列
 * @throws {Error} 相対パス指定子（`./` または `../`）が含まれている場合
 */
export const getLinkUrl = (slug: string) => {
  if (slug.includes('./') || slug.includes('../')) {
    throw new Error(`getLinkUrlには相対パスを渡せません: ${slug}`);
  }
  const start = slug.startsWith('/') ? slug : `/${slug}`;
  return start.endsWith('/') ? start : `${start}/`;
};

/**
 * postのURLを返す。postのURL形式はhttps://wantit.gcreate.jp/slug/になっている。
 * slugが設定されていない場合はファイル名から導き出されたidになる。
 * @param post URLを取得したい対象のpost
 * @returns postのURL（/slug/）
 * @throws {Error} 相対パスがパスに含まれる場合
 */
export const getPostUrl = (post: CollectionEntry<"post">): string => {
  return getLinkUrl(post.data.slug || post.id);
}

/**
 * 対象のPostのタグから関連記事を抽出する。タグの重複が多いほど関連度が高いと判定する。
 * @param target 対象となる記事
 * @param size 関連記事として取得する記事数（最大数、デフォルトで5）
 * @returns 抽出された関連記事の配列、関連記事がない場合は空の配列を返す
 */
export const getRelatedPostsByTags = async (target: CollectionEntryPost, size: number = 5): Promise<CollectionEntryPost[]> => {
  const allPosts = await getCollectionEntryPost();
  const targetTags = getPostTags(target);
  const related = allPosts
    .filter(p => p.id != target.id) // 自身を関連記事の対象から外す
    .map((post) => {
      const tags = getPostTags(post);
      const count = calculateTagsOverlapCount(tags, targetTags);
      return {...post, relatedCount: count};
    }).sort((a, b) => b.relatedCount - a.relatedCount);
  return related.filter(p => p.relatedCount > 0)
    .slice(0, size);
};
