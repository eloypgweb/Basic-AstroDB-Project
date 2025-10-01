import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_CAT90Pbl.mjs';
import 'kleur/colors';
import { a as actions } from '../chunks/_astro_actions_BklHFfEk.mjs';
import { $ as $$Layout } from '../chunks/Layout_DaXICC41.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$New = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$New;
  const result = Astro2.getActionResult(actions.addPost);
  if (result && !result.error && result.data?.id) {
    return Astro2.redirect("/");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Crear Nuevo Post", "data-astro-cid-h4ugnbzq": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="card" data-astro-cid-h4ugnbzq> <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;" data-astro-cid-h4ugnbzq> <a href="/" class="btn btn-secondary" data-astro-cid-h4ugnbzq>
← Volver
</a> <h1 style="margin: 0; color: var(--text);" data-astro-cid-h4ugnbzq>✍️ Crear Nuevo Post</h1> </div> ${result?.error && renderTemplate`<div class="alert alert-error" data-astro-cid-h4ugnbzq>
❌ Error creando el post. Por favor, inténtalo de nuevo.
</div>`} <form method="POST"${addAttribute(actions.addPost, "action")} class="post-form" data-astro-cid-h4ugnbzq> <div class="form-group" data-astro-cid-h4ugnbzq> <label for="title" class="form-label" data-astro-cid-h4ugnbzq>📝 Título del Post</label> <input id="title" name="title" type="text" class="form-input" placeholder="Escribe un título atractivo..." required data-astro-cid-h4ugnbzq> </div> <div class="form-group" data-astro-cid-h4ugnbzq> <label for="content" class="form-label" data-astro-cid-h4ugnbzq>📄 Contenido</label> <textarea id="content" name="content" class="form-textarea" placeholder="Escribe aquí el contenido de tu post..." rows="8" required data-astro-cid-h4ugnbzq></textarea> </div> <div style="display: flex; gap: 1rem; justify-content: flex-end;" data-astro-cid-h4ugnbzq> <a href="/" class="btn btn-secondary" data-astro-cid-h4ugnbzq>Cancelar</a> <button type="submit" class="btn btn-primary" data-astro-cid-h4ugnbzq>
🚀 Crear Post
</button> </div> </form> </div>  ` })}`;
}, "C:/Users/CampusFP/Desktop/ELOY/Workspace/PracticaAstroDb/pruebas-astro-db/src/pages/new.astro", void 0);

const $$file = "C:/Users/CampusFP/Desktop/ELOY/Workspace/PracticaAstroDb/pruebas-astro-db/src/pages/new.astro";
const $$url = "/new";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$New,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
