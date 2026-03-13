import { describe, expect, it } from 'vitest';
import { checkSlugIsUnique } from './check';
import { getCollection } from 'astro:content';

// このテストは意味がない（getCollectionがリアルタイムのデータではなく、.astroにあるキャッシュを読み取っているため）
// せっかく書いたので、skipの仕方、Errorを投げないチェックの仕方の確認のため残しておく
describe('slugの重複がないことの確認', () => {
	it.skip("重複がない", async () => {
		// vitestでgetCollectionは.astroのキャッシュデータを読み取る
		// そのためvitestでslugの重複を検出しようとするのは無駄
		// const allPosts = await getCollection("post");
		// expect(() => checkSlugIsUnique(allPosts)).not.toThrowError();
	});
});
