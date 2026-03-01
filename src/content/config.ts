import { defineCollection, z } from 'astro:content';

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    client: z.string().optional(),
    role: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(), // ausente = posición actual
    current: z.boolean().default(false),
    responsibilities: z.array(z.string()),
    tools: z.array(z.string()),
    technologies: z.array(z.string()),
    methodologies: z.array(z.string()),
    order: z.number(),
  }),
});

const education = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    institution: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    order: z.number(),
  }),
});

export const collections = { experience, education };
