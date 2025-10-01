import { d as db, P as Posts } from './chunks/_astro_db_DZv5qim7.mjs';
import * as z from 'zod';
import { d as defineAction } from './chunks/server_DFq86Pil.mjs';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';

const server = {
  addPost: defineAction({
    accept: "form",
    // acepta formData
    input: z.object({
      title: z.string().min(1),
      content: z.string().min(1)
    }),
    handler: async (input) => {
      const res = await db.insert(Posts).values({
        title: input.title,
        content: input.content,
        published: /* @__PURE__ */ new Date()
      }).returning();
      const id = res?.[0]?.id ?? null;
      return { id };
    }
  }),
  deletePost: defineAction({
    accept: "form",
    input: z.object({
      id: z.string().transform((val) => parseInt(val, 10))
    }),
    handler: async (input) => {
      await db.delete(Posts).where(eq(Posts.id, input.id));
      return { success: true };
    }
  }),
  updatePost: defineAction({
    accept: "form",
    input: z.object({
      id: z.string().transform((val) => parseInt(val, 10)),
      title: z.string().min(1),
      content: z.string().min(1)
    }),
    handler: async (input) => {
      await db.update(Posts).set({
        title: input.title,
        content: input.content
      }).where(eq(Posts.id, input.id));
      return { success: true };
    }
  })
};

export { server };
