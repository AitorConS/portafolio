import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string(),
    description: z.string(),
    link: z.string(),
    github: z.string(),
  }),
});

export const collections = { projects };