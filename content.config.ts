import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    services: defineCollection({
      type: 'data',
      source: 'static/services/**.json',
      schema: z.object({
        title: z.string(),
        short_text: z.string(),
        slug: z.string(),
        thumbnail: z.string(),
        long_text: z.string().optional(),
      }),
    }),
    more_services: defineCollection({
      type: 'data',
      source: 'static/more_services/**.json',
      schema: z.object({
        title: z.string(),
        short_text: z.string(),
        slug: z.string(),
        thumbnail: z.string(),
        long_text: z.string().optional(),
      }),
    }),
    eco_services: defineCollection({
      type: 'data',
      source: 'static/eco_services/**.json',
      schema: z.object({
        title: z.string(),
        short_text: z.string(),
        slug: z.string(),
        thumbnail1: z.string(),
        thumbnail2: z.string(),
        long_text: z.string().optional(),
        eco: z.boolean().optional(),
      }),
    }),
    works: defineCollection({
      type: 'data',
      source: 'blog/posts/**.json',
      schema: z.object({
        date: z.string(),
        title: z.string(),
        place: z.string(),
        thumbnail: z.string(),
        service: z.string(),
        seoDescription: z.string(),
      }),
    }),
  },
})
