import { asDrizzleTable } from '@astrojs/db/runtime';
import { createClient } from '@astrojs/db/db-client/libsql-web.js';
import '@astrojs/db/dist/runtime/virtual.js';

const db = await createClient({
  url: "memory:",
  token: process.env.ASTRO_DB_APP_TOKEN
});
const Posts = asDrizzleTable("Posts", { "columns": { "id": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Posts", "primaryKey": true } }, "title": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "title", "collection": "Posts", "primaryKey": false, "optional": false } }, "content": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "content", "collection": "Posts", "primaryKey": false, "optional": false } }, "published": { "type": "date", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "published", "collection": "Posts" } } }, "deprecated": false, "indexes": {} }, false);

export { Posts as P, db as d };
