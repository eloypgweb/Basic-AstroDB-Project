import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as renderScript, h as addAttribute } from '../chunks/astro/server_CAT90Pbl.mjs';
import 'kleur/colors';
import { d as db, P as Posts } from '../chunks/_astro_db_Byf9-Wwn.mjs';
import { a as actions } from '../chunks/_astro_actions_BklHFfEk.mjs';
import { $ as $$Layout } from '../chunks/Layout_DaXICC41.mjs';
/* empty css                                 */
import { desc } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await db.select().from(Posts).orderBy(desc(Posts.published));
  const deleteResult = Astro2.getActionResult(actions.deletePost);
  if (deleteResult && !deleteResult.error) {
    return Astro2.redirect("/");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mi Blog - Inicio", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="header" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>🚀 EloBlog</h1> <p data-astro-cid-j7pv25f6>Bienvenido a mi blog personal creado con Astro y Astro DB</p> </div> <div class="card" data-astro-cid-j7pv25f6> <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;" data-astro-cid-j7pv25f6> <h2 style="margin: 0; color: var(--text); font-size: 1.875rem;" data-astro-cid-j7pv25f6>Últimos Posts</h2> <a href="/new" class="btn btn-primary" data-astro-cid-j7pv25f6>
✍️ Crear nuevo post
</a> </div> ${deleteResult?.error && renderTemplate`<div class="alert alert-error" data-astro-cid-j7pv25f6>
❌ Error eliminando el post
</div>`} ${posts.length === 0 ? renderTemplate`<div style="text-align: center; padding: 3rem; color: var(--text, #1e293b);" data-astro-cid-j7pv25f6> <div style="font-size: 4rem; margin-bottom: 1rem;" data-astro-cid-j7pv25f6>📝</div> <h3 style="margin-bottom: 0.5rem; color: var(--text, #1e293b);" data-astro-cid-j7pv25f6>No hay posts aún</h3> <p style="color: var(--text, #1e293b); opacity: 0.8;" data-astro-cid-j7pv25f6>¡Crea tu primer post para comenzar!</p> <a href="/new" class="btn btn-primary" style="margin-top: 1rem;" data-astro-cid-j7pv25f6>
Crear primer post
</a> </div>` : renderTemplate`<div class="posts-grid" data-astro-cid-j7pv25f6> ${posts.map((post) => renderTemplate`<article class="post-card" data-astro-cid-j7pv25f6> <div class="post-content" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6> <a${addAttribute(`/posts/${post.id}`, "href")} class="post-title-link" data-astro-cid-j7pv25f6> ${post.title} </a> </h3> <p class="post-excerpt" data-astro-cid-j7pv25f6> ${post.content.length > 150 ? post.content.substring(0, 150) + "..." : post.content} </p> <div class="post-meta" data-astro-cid-j7pv25f6> <span class="post-date" data-astro-cid-j7pv25f6>
📅 ${new Date(post.published).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </span> </div> </div> <div class="post-actions" data-astro-cid-j7pv25f6> <a${addAttribute(`/edit/${post.id}`, "href")} class="btn btn-secondary btn-sm" data-astro-cid-j7pv25f6>
✏️ Editar
</a> <form method="POST"${addAttribute(actions.deletePost, "action")} style="display: inline;" class="delete-form"${addAttribute(post.title, "data-post-title")} data-astro-cid-j7pv25f6> <input type="hidden" name="id"${addAttribute(post.id, "value")} data-astro-cid-j7pv25f6> <button type="button" class="btn btn-danger btn-sm delete-btn" data-astro-cid-j7pv25f6>
🗑️ Eliminar
</button> </form> </div> </article>`)} </div>`} </div>  <div id="deleteModal" class="modal" data-astro-cid-j7pv25f6> <div class="modal-content" data-astro-cid-j7pv25f6> <div class="modal-header" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>🗑️ Confirmar eliminación</h3> </div> <div class="modal-body" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>¿Estás seguro de que quieres eliminar el post "<span id="postTitle" data-astro-cid-j7pv25f6></span>"?</p> <p class="warning-text" data-astro-cid-j7pv25f6>⚠️ Esta acción no se puede deshacer.</p> </div> <div class="modal-footer" data-astro-cid-j7pv25f6> <button type="button" class="btn btn-secondary" id="cancelDelete" data-astro-cid-j7pv25f6>Cancelar</button> <button type="button" class="btn btn-danger" id="confirmDelete" data-astro-cid-j7pv25f6>Sí, eliminar</button> </div> </div> </div>  ${renderScript($$result2, "C:/Users/CampusFP/Desktop/ELOY/Workspace/PracticaAstroDb/pruebas-astro-db/src/pages/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/CampusFP/Desktop/ELOY/Workspace/PracticaAstroDb/pruebas-astro-db/src/pages/index.astro", void 0);

const $$file = "C:/Users/CampusFP/Desktop/ELOY/Workspace/PracticaAstroDb/pruebas-astro-db/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
