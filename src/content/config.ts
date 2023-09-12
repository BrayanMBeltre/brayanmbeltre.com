import { defineCollection, z } from 'astro:content';

const projectCollection =  defineCollection({
	type:"content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		category: z.enum(["Portal", "Backoffice", "Website"]),
		tags: z.array(z.string()),
		publishDate: z.coerce.date(),
		url: z.string().url().optional(),
		featured: z.boolean().optional(),
		img: z.object({
			src: z.string().url(),
			alt: z.string(),
		})

	})
})

export const collections = {
	"projects": projectCollection,
}
