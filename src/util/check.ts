import { getCollection, type CollectionEntry } from "astro:content";
import { splitCategoryAndSlugFromPostId } from "./url";

export const checkSlugIsUnique = (posts: CollectionEntry<"post">[]) => {
  const uniqueSlugs = new Map<string, string[]>();
  const dupulicated: string[] = [];
  posts.forEach((post) => {
    const { slug: fileId } = splitCategoryAndSlugFromPostId(post.id);
    const slug = post.data.slug ?? fileId;
    if (uniqueSlugs.has(slug)) {
      dupulicated.push(slug);
    }
    uniqueSlugs.set(slug, [
      ...(uniqueSlugs.get(slug) ?? []),
      post.filePath ?? "",
    ]);
  });
  if (dupulicated.length > 0) {
    // 長さが異なる＝重複したものが中にある
    const errorPath = dupulicated.map((slug) => uniqueSlugs.get(slug)?.join("\n"));
    throw new Error(`記事のslugが重複しています。\n${errorPath}`);
  }
};
