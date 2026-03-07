import { getCollection, type CollectionEntry } from "astro:content";
import { splitCategoryAndSlugFromPostId } from "./url";

export const checkSlugIsUnique = async (posts: CollectionEntry<"post">[]) => {
  const uniqueSlugs = new Map<string, string[]>();
  const dupulicated: string[] = [];
  posts.forEach((post) => {
    const { slug } = splitCategoryAndSlugFromPostId(post.id);
    const finalSlug = post.data.slug ?? slug;
    if (uniqueSlugs.has(finalSlug)) {
      dupulicated.push(finalSlug);
    }
    uniqueSlugs.set(finalSlug, [
      ...(uniqueSlugs.get(finalSlug) ?? []),
      post.id,
    ]);
  });
  if (dupulicated.length > 0) {
    // 長さが異なる＝重複したものが中にある
    const errorPath = dupulicated.map((slug) => {
      return uniqueSlugs.get(slug)?.join("\n");
    });
    throw new Error(`記事のslugが重複しています。\n${errorPath}`);
  }
};
