import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as renderScript, h as addAttribute } from '../chunks/astro/server_CAT90Pbl.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DaXICC41.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = [
    {
      id: 1,
      title: "\u{1F389} \xA1Aplicaci\xF3n desplegada exitosamente!",
      content: "Esta aplicaci\xF3n est\xE1 funcionando perfectamente en Vercel. El blog est\xE1 completamente operativo con dise\xF1o moderno y funcionalidades avanzadas.",
      published: /* @__PURE__ */ new Date("2025-10-01")
    },
    {
      id: 2,
      title: "\u{1F6E0}\uFE0F Caracter\xEDsticas implementadas",
      content: "\u2705 Dise\xF1o responsivo moderno\n\u2705 Sistema CRUD completo\n\u2705 Modales de confirmaci\xF3n elegantes\n\u2705 Animaciones suaves\n\u2705 Deploy en Vercel\n\n\u{1F51C} Pr\xF3ximamente: Base de datos persistente",
      published: /* @__PURE__ */ new Date("2025-10-01")
    },
    {
      id: 3,
      title: "\u{1F3A8} Dise\xF1o y UX",
      content: "La aplicaci\xF3n cuenta con un sistema de dise\xF1o moderno que incluye gradientes, sombras, transiciones suaves y una experiencia de usuario excepcional.",
      published: /* @__PURE__ */ new Date("2025-09-30")
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mi Blog - Inicio", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="header" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>🚀 RealEloBlog</h1> <p data-astro-cid-j7pv25f6>Bienvenido a mi blog personal creado con Astro y Astro DB - Versión actualizada</p> </div> <div class="card" data-astro-cid-j7pv25f6> <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;" data-astro-cid-j7pv25f6> <h2 style="margin: 0; color: var(--text); font-size: 1.875rem;" data-astro-cid-j7pv25f6>Últimos Posts</h2> <a href="/new" class="btn btn-primary" data-astro-cid-j7pv25f6>
✍️ Crear nuevo post
</a> </div> <div class="info-banner" data-astro-cid-j7pv25f6> <div class="info-icon" data-astro-cid-j7pv25f6>ℹ️</div> <div data-astro-cid-j7pv25f6> <strong data-astro-cid-j7pv25f6>Modo demostración</strong><br data-astro-cid-j7pv25f6>
La aplicación está funcionando correctamente. Actualmente mostrando datos de ejemplo mientras configuramos la base de datos persistente.
</div> </div> <div class="posts-grid" data-astro-cid-j7pv25f6> ${posts.map((post) => renderTemplate`<article class="post-card" data-astro-cid-j7pv25f6> <div class="post-content" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6> <a${addAttribute(`/posts/${post.id}`, "href")} class="post-title-link" data-astro-cid-j7pv25f6> ${post.title} </a> </h3> <p class="post-excerpt" data-astro-cid-j7pv25f6> ${post.content.length > 150 ? post.content.substring(0, 150) + "..." : post.content} </p> <div class="post-meta" data-astro-cid-j7pv25f6> <span class="post-date" data-astro-cid-j7pv25f6>
📅 ${new Date(post.published).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </span> </div> </div> <div class="post-actions" data-astro-cid-j7pv25f6> <a${addAttribute(`/posts/${post.id}`, "href")} class="btn btn-primary btn-sm" data-astro-cid-j7pv25f6>
👁️ Ver
</a> <button class="btn btn-secondary btn-sm" onclick="showDemo()" data-astro-cid-j7pv25f6>
✏️ Editar
</button> <button class="btn btn-danger btn-sm" onclick="showDemo()" data-astro-cid-j7pv25f6>
🗑️ Eliminar
</button> </div> </article>`)} </div> </div>  <div id="demoModal" class="modal" data-astro-cid-j7pv25f6> <div class="modal-content" data-astro-cid-j7pv25f6> <div class="modal-header" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>� Modo demostración</h3> </div> <div class="modal-body" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>Esta función estará disponible cuando conectemos la base de datos persistente.</p> <p data-astro-cid-j7pv25f6>Por ahora puedes explorar el diseño y la navegación.</p> </div> <div class="modal-footer" data-astro-cid-j7pv25f6> <button type="button" class="btn btn-primary" onclick="closeDemo()" data-astro-cid-j7pv25f6>Entendido</button> </div> </div> </div>  ${renderScript($$result2, "C:/Users/CampusFP/Desktop/ELOY/Workspace/PracticaAstroDb/pruebas-astro-db/src/pages/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
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
