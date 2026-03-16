import type { CollectionEntry } from "astro:content";

export type TagInformation = {
  origin: string;
  display: string;
  url: string;
};

export const getAllTags = (
  posts: CollectionEntry<"post">[],
): TagInformation[] => {
	const uniqueTags = [...new Set(posts.flatMap(post => post.data.tags ?? []))]
	const result = uniqueTags.map((t) => ({
		origin: t,
		display: t,
		url: t.toLowerCase(),
	}));
	return result;
};
