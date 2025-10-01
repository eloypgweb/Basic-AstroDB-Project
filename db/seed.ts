// db/seed.ts
import { db, Posts } from 'astro:db';

export default async function () {
  await db.insert(Posts).values([
    { title: "Hola Astro", content: "Mi primer post", published: new Date() },
    { title: "Segundo post", content: "Contenido de ejemplo", published: new Date() },
  ]);
}

