import { defineCollection, z } from 'astro:content';

const menuCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		price: z.string().optional(),
		description: z.string().optional(),
		category: z.enum(['A Partager / Entrées', 'Plats', 'Douceurs']),
		order: z.number().default(0),
		photo: z.string().optional(),
	}),
});

const winesCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		domaine: z.string(),
		region: z.string(),
		type: z.enum(['Rouges', 'Blancs', 'Rosés', 'Bulles']),
		price_glass: z.string().optional(),
		price_bottle: z.string().optional(),
		is_nature: z.boolean().default(false),
		photo: z.string().optional(),
		note: z.string().optional(),
	}),
});

export const collections = {
	'menu': menuCollection,
	'vins': winesCollection,
};
