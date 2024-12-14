import { glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z
      .string()
      .max(100, { message: "Title must be 100 characters or less" }),
    description: z
      .string()
      .max(200, { message: "Description must be 200 characters or less" }),
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

const projects = defineCollection({
  loader: glob({ pattern: "**/[^_]*.mdx", base: "./src/content/projects" }),
  schema: z.object({
    name: z
      .string()
      .max(100, { message: "Name must be 100 characters or less" }),
    description: z
      .string()
      .max(200, { message: "Description must be 200 characters or less" }),
    year: z
      .number()
      .min(2000, { message: "Year must be after 2000" })
      .max(new Date().getFullYear(), {
        message: "Year must be before or equal to current year",
      }),
    technologies: z
      .array(z.string())
      .min(1, { message: "Technologies are required" }),
    headerImage: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    cardImage: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    liveWebsite: z.string().optional(),
    repository: z.string().optional(),
  }),
});

export const collections = { blog, projects };
