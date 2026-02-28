import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const postCollection = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/post",
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    description: z.string().optional(),
    featuredimage: z.string().optional(),
    date: z.coerce.date(),
    lastmod: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    product: z
      .object({
        name: z.string().optional(),
        number: z.string().optional(),
        rate: z.number().optional(),
        comment: z.string().optional(),
        kaeyome: z.string().optional(),
        amazon: z.string().optional(),
        rakuten: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = {
  post: postCollection,
};
