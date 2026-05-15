import type { CollectionEntry } from "astro:content";

/**
 * 開発中はvscodeで該当ファイルを開くリンクになり、本番ではgithubの該当ファイルへのリンクURLを返す
 * @param post ファイルパスを知りたいpost
 * @returns 該当ファイルへのリンク（devで動かしているときはvscodeで開く、そうでない場合はgithubへのリンク）
 */
export const getPostFilePath = (post: CollectionEntry<"post">) => {
	const filePath = post.filePath ?? "";

	if (import.meta.env.DEV) {
		return `vscode://file${process.cwd()}/${filePath}`;
	}

	return `https://github.com/gen0083/astro_wantit.gcreate.jp//blob/main/${filePath}`;
};
