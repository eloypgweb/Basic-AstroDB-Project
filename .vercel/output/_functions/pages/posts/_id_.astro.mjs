import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_CAT90Pbl.mjs';
import 'kleur/colors';
import { d as db, P as Posts } from '../../chunks/_astro_db_Byf9-Wwn.mjs';
import { $ as $$Layout } from '../../chunks/Layout_DaXICC41.mjs';
/* empty css                                   */
import { eq } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const id = Number(Astro2.params.id);
  if (Number.isNaN(id)) {
    return Astro2.redirect("/");
  }
  const post = await db.select().from(Posts).where(eq(Posts.id, id)).get();
  if (!post) {
    return Astro2.redirect("/");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.title, "data-astro-cid-lvjzyg5v": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="card" data-astro-cid-lvjzyg5v> <div class="post-header" data-astro-cid-lvjzyg5v> <div class="breadcrumb" data-astro-cid-lvjzyg5v> <a href="/" class="btn btn-secondary" data-astro-cid-lvjzyg5v>← Volver al inicio</a> </div> <h1 class="post-title" data-astro-cid-lvjzyg5v>${post.title}</h1> <div class="post-meta" data-astro-cid-lvjzyg5v> <span class="post-date" data-astro-cid-lvjzyg5v>
📅 Publicado el ${new Date(post.published).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  })} </span> </div> <div class="post-actions" data-astro-cid-lvjzyg5v> <a${addAttribute(`/edit/${post.id}`, "href")} class="btn btn-primary" data-astro-cid-lvjzyg5v>
✏️ Editar Post
</a> </div> </div> <div class="post-content" data-astro-cid-lvjzyg5v> ${post.content.split("\n").map((paragraph) => paragraph.trim() && renderTemplate`<p data-astro-cid-lvjzyg5v>${paragraph}</p>`)} </div> </article>  ` })}`;
}, "C:/Users/CampusFP/Desktop/ELOY/Workspace/PracticaAstroDb/pruebas-astro-db/src/pages/posts/[id].astro", void 0);

const $$file = "C:/Users/CampusFP/Desktop/ELOY/Workspace/PracticaAstroDb/pruebas-astro-db/src/pages/posts/[id].astro";
const $$url = "/posts/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
