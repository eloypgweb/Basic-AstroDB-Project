import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, l as renderScript } from '../../chunks/astro/server_CAT90Pbl.mjs';
import 'kleur/colors';
import { d as db, P as Posts, a as actions } from '../../chunks/_astro_db_DZv5qim7.mjs';
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
  const result = Astro2.getActionResult(actions.updatePost);
  if (result && !result.error) {
    return Astro2.redirect("/");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Editar: ${post.title}`, "data-astro-cid-d26h47xz": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="card" data-astro-cid-d26h47xz> <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;" data-astro-cid-d26h47xz> <a href="/" class="btn btn-secondary" data-astro-cid-d26h47xz>
← Volver
</a> <h1 style="margin: 0; color: var(--text);" data-astro-cid-d26h47xz>✏️ Editar Post</h1> </div> ${result?.error && renderTemplate`<div class="alert alert-error" data-astro-cid-d26h47xz>
❌ Error actualizando el post. Por favor, inténtalo de nuevo.
</div>`} <form method="POST"${addAttribute(actions.updatePost, "action")} class="post-form" id="editForm" data-astro-cid-d26h47xz> <input type="hidden" name="id"${addAttribute(post.id, "value")} data-astro-cid-d26h47xz> <div class="form-group" data-astro-cid-d26h47xz> <label for="title" class="form-label" data-astro-cid-d26h47xz>📝 Título del Post</label> <input id="title" name="title" type="text" class="form-input"${addAttribute(post.title, "value")} required data-astro-cid-d26h47xz> </div> <div class="form-group" data-astro-cid-d26h47xz> <label for="content" class="form-label" data-astro-cid-d26h47xz>📄 Contenido</label> <textarea id="content" name="content" class="form-textarea" rows="8" required data-astro-cid-d26h47xz>${post.content}</textarea> </div> <div style="display: flex; gap: 1rem; justify-content: flex-end;" data-astro-cid-d26h47xz> <a${addAttribute(`/posts/${post.id}`, "href")} class="btn btn-secondary" data-astro-cid-d26h47xz>Ver Post</a> <a href="/" class="btn btn-secondary" data-astro-cid-d26h47xz>Cancelar</a> <button type="button" class="btn btn-primary" id="saveBtn" data-astro-cid-d26h47xz>
💾 Guardar Cambios
</button> </div> </form> </div>  <div id="saveModal" class="modal" data-astro-cid-d26h47xz> <div class="modal-content" data-astro-cid-d26h47xz> <div class="modal-header" data-astro-cid-d26h47xz> <h3 data-astro-cid-d26h47xz>💾 Confirmar cambios</h3> </div> <div class="modal-body" data-astro-cid-d26h47xz> <p data-astro-cid-d26h47xz>¿Estás seguro de que quieres guardar los cambios en este post?</p> <p class="info-text" data-astro-cid-d26h47xz>📝 Los cambios se aplicarán inmediatamente.</p> </div> <div class="modal-footer" data-astro-cid-d26h47xz> <button type="button" class="btn btn-secondary" id="cancelSave" data-astro-cid-d26h47xz>Cancelar</button> <button type="button" class="btn btn-primary" id="confirmSave" data-astro-cid-d26h47xz>Sí, guardar cambios</button> </div> </div> </div>  ${renderScript($$result2, "C:/Users/CampusFP/Desktop/ELOY/Workspace/PracticaAstroDb/pruebas-astro-db/src/pages/edit/[id].astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/CampusFP/Desktop/ELOY/Workspace/PracticaAstroDb/pruebas-astro-db/src/pages/edit/[id].astro", void 0);

const $$file = "C:/Users/CampusFP/Desktop/ELOY/Workspace/PracticaAstroDb/pruebas-astro-db/src/pages/edit/[id].astro";
const $$url = "/edit/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
