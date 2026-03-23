import type { CollectionEntry } from "astro:content";

export type TagInformation = {
  origin: string;
  display: string;
  url: string;
};

/**
 * 全記事のタグ情報を一覧を取得する
 * @param posts 全記事のコレクション
 * @returns タグ情報の正規化を行ったurlをキーとしたタグ情報
 */
export const getAllTags = (
  posts: CollectionEntry<"post">[],
): TagInformation[] => {
	const uniqueTags = new Map<string, TagInformation>();
	posts.forEach((post) => {
		post.data.tags?.forEach((tag) => {
			const info = normalizeTag(tag);
			if (!uniqueTags.has(info.url)) {
				uniqueTags.set(info.url, info);
			}
		});
	});
	return [...uniqueTags.values()];
};

/**
 * 記事単体のタグ情報のTagInformationを返す。
 * @param post 記事単体のデータ
 * @returns tag情報の配列。タグ情報が設定されていない場合は空配列を返す。
 */
export const getPostTags = (post: CollectionEntry<"post">): TagInformation[] => {
	return (post.data.tags ?? []).map((tag) => {
		const info = normalizeTag(tag);
		return {
			origin: tag,
			display: info.display,
			url: info.url,
		};
	});
}

export const normalizeTag = (rawTag: string): TagInformation => {
	const trimed = rawTag.trim();
	const display = trimed.normalize('NFKC');
	const url = display.toLowerCase().replace(/\s+/g, '-');
	return { origin: rawTag, display, url };
};

const isSame = (a: TagInformation, b: TagInformation) => a.display === b.display && a.origin === b.origin && a.url === b.url
