export const getCategorySlug = (entry: string) => {
  return entry.replace(/\.[^/.]+$/, "");
};

export const splitCategoryAndSlug = (id: string) => {
  return id.split("/");
};
