import { defineCollection, reference, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z
      .string()
      .max(100, { message: "Title must be 100 characters or less" }),
    description: z
      .string()
      .max(200, { message: "Title must be 200 characters or less" }),
    date: z.date(),
    headerImage: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    relatedPosts: z.array(reference("blog")).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
