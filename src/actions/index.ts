// src/actions/index.ts
import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { db, Posts, eq } from 'astro:db';

export const server = {
  addPost: defineAction({
    accept: 'form', // acepta formData
    input: z.object({
      title: z.string().min(1),
      content: z.string().min(1),
    }),
    handler: async (input) => {
      // Insertar y (si es compatible) devolver el id insertado
      const res = await db.insert(Posts).values({
        title: input.title,
        content: input.content,
        published: new Date(),
      }).returning();
      // `returning()` devuelve filas insertadas en dialectos que lo soportan
      const id = res?.[0]?.id ?? null;
      return { id };
    },
  }),
  
  deletePost: defineAction({
    accept: 'form',
    input: z.object({
      id: z.string().transform((val) => parseInt(val, 10)),
    }),
    handler: async (input) => {
      await db.delete(Posts).where(eq(Posts.id, input.id));
      return { success: true };
    },
  }),

  updatePost: defineAction({
    accept: 'form',
    input: z.object({
      id: z.string().transform((val) => parseInt(val, 10)),
      title: z.string().min(1),
      content: z.string().min(1),
    }),
    handler: async (input) => {
      await db.update(Posts)
        .set({
          title: input.title,
          content: input.content,
        })
        .where(eq(Posts.id, input.id));
      return { success: true };
    },
  }),
};
