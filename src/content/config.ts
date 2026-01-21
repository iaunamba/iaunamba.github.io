// src/content/config.ts
import { defineCollection, z } from "astro:content";

// Esquema para investigaciones
const investigationCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date_publication: z.string(),
    cover_image: z.string(),
    tags: z.array(z.string()),
    author: z.array(z.string()),
    readingtime: z.number(),
    url_doi_org: z.string().optional(),
  }),
});

// Esquema para publicaciones (puedes ajustar según tus necesidades)
const publicationsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date_publication: z.string(),
      cover_image: image(),
      tags: z.array(z.string()),
      author: z.array(z.string()),
      readingtime: z.number(),
      url_doi_org: z.string().optional(),
      // Añade más campos específicos de publicaciones si los necesitas
    }),
});

// Esquema para publicaciones (puedes ajustar según tus necesidades)
const projectsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date_publication: z.string(),
      cover_image: image(),
      tags: z.array(z.string()),
      author: z.array(z.string()),
      readingtime: z.number(),
      url_doi_org: z.string().optional(),
      // Añade más campos específicos de publicaciones si los necesitas
    }),
});

// Esquema para autores (si lo tienes)
const authorsCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    avatar: z.string(),
    bio: z.string().optional(),
    // Otros campos...
  }),
});

export const collections = {
  publications: investigationCollection,
  news: publicationsCollection,
  investigation: projectsCollection,
  authors: authorsCollection,
};
