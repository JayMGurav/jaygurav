import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const readingListStatus = ["TO_READ", "READING", "READ"] as const;

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const learnings = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/learnings" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
  }),
});

const readingListCollection = defineCollection({
  // type: "data",
  loader: glob({ pattern: '**/*.json', base: "./src/content/reading-list" }),
  schema: z.array(
    z.object({
      title: z.string(),
      author: z.string(),
      status: z.enum(readingListStatus),
      tags: z.array(z.string()).optional(),
      link: z.string().optional(),
    })
  ),
});

export const collections = { 
  articles, 
  projects, 
  readingList: readingListCollection, 
  learnings 
};
