// db/config.ts
import { defineDb, defineTable, column } from "astro:db";

const Posts = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    content: column.text(),
    published: column.date(),
  },
});

export default defineDb({
  tables: { Posts },
});
