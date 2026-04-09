import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    slides: z.array(
      z.object({
        id: z.number(),
        image: z.string(),
        alt: z.string(),
      })
    ),
  }),
});

export const collections = {
  posts,
};