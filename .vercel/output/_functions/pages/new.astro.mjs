import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as renderScript } from '../chunks/astro/server_CAT90Pbl.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DaXICC41.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$New = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Crear Nuevo Post", "data-astro-cid-h4ugnbzq": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="header" data-astro-cid-h4ugnbzq> <h1 data-astro-cid-h4ugnbzq>✍️ Crear Nuevo Post</h1> <p data-astro-cid-h4ugnbzq>Comparte tus ideas con el mundo</p> </div> <div class="card" data-astro-cid-h4ugnbzq> <div class="demo-notice" data-astro-cid-h4ugnbzq> <div class="demo-icon" data-astro-cid-h4ugnbzq>🚧</div> <div data-astro-cid-h4ugnbzq> <strong data-astro-cid-h4ugnbzq>Modo demostración</strong><br data-astro-cid-h4ugnbzq>
Esta funcionalidad estará disponible cuando conectemos la base de datos persistente.
</div> </div> <form class="create-form" onsubmit="showDemo(event)" data-astro-cid-h4ugnbzq> <div class="form-group" data-astro-cid-h4ugnbzq> <label for="title" data-astro-cid-h4ugnbzq>Título del post</label> <input type="text" id="title" name="title" placeholder="Escribe un título atractivo..." required data-astro-cid-h4ugnbzq> </div> <div class="form-group" data-astro-cid-h4ugnbzq> <label for="content" data-astro-cid-h4ugnbzq>Contenido</label> <textarea id="content" name="content" rows="12" placeholder="Escribe el contenido de tu post aquí..." required data-astro-cid-h4ugnbzq></textarea> </div> <div class="form-actions" data-astro-cid-h4ugnbzq> <a href="/" class="btn btn-secondary" data-astro-cid-h4ugnbzq>
← Volver al inicio
</a> <button type="submit" class="btn btn-primary" data-astro-cid-h4ugnbzq>
✨ Crear post
</button> </div> </form> </div>  <div id="demoModal" class="modal" data-astro-cid-h4ugnbzq> <div class="modal-content" data-astro-cid-h4ugnbzq> <div class="modal-header" data-astro-cid-h4ugnbzq> <h3 data-astro-cid-h4ugnbzq>🚧 Función en desarrollo</h3> </div> <div class="modal-body" data-astro-cid-h4ugnbzq> <p data-astro-cid-h4ugnbzq>La creación de posts estará disponible cuando conectemos la base de datos persistente.</p> <p data-astro-cid-h4ugnbzq>¡El formulario y el diseño ya están listos!</p> </div> <div class="modal-footer" data-astro-cid-h4ugnbzq> <button type="button" class="btn btn-primary" onclick="closeDemo()" data-astro-cid-h4ugnbzq>Entendido</button> </div> </div> </div>  ${renderScript($$result2, "C:/Users/CampusFP/Desktop/ELOY/Workspace/PracticaAstroDb/pruebas-astro-db/src/pages/new.astro?astro&type=script&index=0&lang.ts")} ` })}`;
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
