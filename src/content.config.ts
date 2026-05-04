import {getCategorySlug} from "@/util/url";
import {glob} from "astro/loaders";
import {defineCollection} from "astro:content";
import {z} from "astro/zod";

const postCollection = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.md",
    base: "./src/content/post",
    generateId: ({ entry, base }) => {
      return getCategorySlug(entry);
    },
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    featuredimage: z.string().optional(),
    date: z.coerce.date(),
    lastmod: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    product: z
      .object({
        name: z.string().optional(),
        number: z.string().optional(),
        link: z.string().optional(),
        rate: z.number().optional(),
        comment: z.string().optional(),
        kaeyome: z.string().optional(),
        amazon: z.string().optional(),
        rakuten: z.string().optional(),
      })
      .optional(),
  }),
});

const forsiteCollection = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.md",
    base: "./src/content/forsite",
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
  }),
});

export const collections = {
  post: postCollection,
  forsite: forsiteCollection,
};
