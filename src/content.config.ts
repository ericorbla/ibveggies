import { defineCollection, z } from "astro:content";

const updates = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
  }),
});

export const collections = { updates };