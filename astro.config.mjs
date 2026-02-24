// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	vite: {
		server: {
			watch: {
				// baseで指定したフォルダ（例: content）を監視対象に含める
				// これにより、フォルダ内の画像やMarkdownの変更が検知されやすくなります
				ignored: ['!**/content/**'],
			},
		},
	},
});
