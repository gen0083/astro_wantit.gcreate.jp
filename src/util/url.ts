export const getCategorySlug = (entry: string) => {
  return entry.replace(/\.[^/.]+$/, "");
};

/**
 * getCollection("post")の各ポストのidを渡すとカテゴリとその記事のslugに分割する
 * @param id post.id
 * @returns object: { category: string, slug: string }
 * @example
 * const posts = await getCollection("post");
 * return posts.map((post) => {
 *   const { category, slug } = splitCategoryAndSlug(post.id);
 *   return slug;
 * });
 */
export const splitCategoryAndSlugFromPostId = (id: string) => {
  const [category, slug] = id.split("/");
  return {
    category: category,
    slug: slug,
  };
};
