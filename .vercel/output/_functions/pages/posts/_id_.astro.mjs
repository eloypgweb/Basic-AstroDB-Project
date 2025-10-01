import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as renderScript } from '../../chunks/astro/server_CAT90Pbl.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_DaXICC41.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const posts = {
    "1": {
      id: 1,
      title: "\u{1F389} \xA1Aplicaci\xF3n desplegada exitosamente!",
      content: "Esta aplicaci\xF3n est\xE1 funcionando perfectamente en Vercel. El blog est\xE1 completamente operativo con dise\xF1o moderno y funcionalidades avanzadas.\n\nLa aplicaci\xF3n incluye:\n\n\u2705 Dise\xF1o responsivo y moderno\n\u2705 Sistema de navegaci\xF3n fluido\n\u2705 Interfaz de usuario elegante\n\u2705 Deploy exitoso en Vercel\n\nEl siguiente paso ser\xE1 configurar una base de datos persistente para poder crear y gestionar posts reales.",
      published: /* @__PURE__ */ new Date("2025-10-01")
    },
    "2": {
      id: 2,
      title: "\u{1F6E0}\uFE0F Caracter\xEDsticas implementadas",
      content: "Esta aplicaci\xF3n de blog cuenta con m\xFAltiples caracter\xEDsticas avanzadas:\n\n**Dise\xF1o y UX:**\n\u2705 Dise\xF1o responsivo moderno\n\u2705 Gradientes y sombras elegantes\n\u2705 Animaciones suaves\n\u2705 Tipograf\xEDa cuidada\n\n**Funcionalidades:**\n\u2705 Sistema CRUD completo\n\u2705 Modales de confirmaci\xF3n elegantes\n\u2705 Navegaci\xF3n intuitiva\n\u2705 Estados de error manejados\n\n**Tecnolog\xEDa:**\n\u2705 Astro v5 con SSR\n\u2705 TypeScript\n\u2705 Deploy en Vercel\n\u2705 Astro Actions\n\n**\u{1F51C} Pr\xF3ximamente:**\n- Base de datos persistente\n- Autenticaci\xF3n de usuarios\n- Comentarios en posts\n- Categor\xEDas y tags",
      published: /* @__PURE__ */ new Date("2025-10-01")
    },
    "3": {
      id: 3,
      title: "\u{1F3A8} Dise\xF1o y UX",
      content: "La aplicaci\xF3n cuenta con un sistema de dise\xF1o moderno que prioriza la experiencia del usuario:\n\n**Sistema de colores:**\n- Paleta de colores cuidadosamente seleccionada\n- Modo claro optimizado para legibilidad\n- Contrastes apropiados para accesibilidad\n\n**Tipograf\xEDa:**\n- Jerarqu\xEDa clara de t\xEDtulos\n- Espaciado \xF3ptimo entre l\xEDneas\n- Tama\xF1os responsivos\n\n**Interacciones:**\n- Transiciones suaves\n- Estados hover bien definidos\n- Feedback visual inmediato\n- Modales elegantes\n\n**Responsividad:**\n- Dise\xF1o mobile-first\n- Breakpoints optimizados\n- Componentes que se adaptan\n\nTodo esto contribuye a una experiencia de usuario excepcional que hace que navegar por el blog sea un placer.",
      published: /* @__PURE__ */ new Date("2025-09-30")
    }
  };
  const post = id && posts[id] || null;
  if (!post) {
    return Astro2.redirect("/");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post?.title || "Post no encontrado", "data-astro-cid-lvjzyg5v": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="post-header" data-astro-cid-lvjzyg5v> <a href="/" class="btn btn-secondary back-btn" data-astro-cid-lvjzyg5v>
← Volver al blog
</a> ${post ? renderTemplate`<article class="post-article" data-astro-cid-lvjzyg5v> <header class="article-header" data-astro-cid-lvjzyg5v> <h1 class="article-title" data-astro-cid-lvjzyg5v>${post.title}</h1> <div class="article-meta" data-astro-cid-lvjzyg5v> <span class="article-date" data-astro-cid-lvjzyg5v>
📅 ${new Date(post.published).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </span> </div> </header> <div class="article-content" data-astro-cid-lvjzyg5v> ${post.content.split("\n").map(
    (paragraph) => paragraph.trim() && renderTemplate`<p data-astro-cid-lvjzyg5v>${paragraph}</p>`
  )} </div> </article>` : renderTemplate`<div class="error-message" data-astro-cid-lvjzyg5v> <h1 data-astro-cid-lvjzyg5v>😕 Post no encontrado</h1> <p data-astro-cid-lvjzyg5v>El post que buscas no existe o ha sido eliminado.</p> </div>`} <div class="post-actions" data-astro-cid-lvjzyg5v> <a href="/" class="btn btn-secondary" data-astro-cid-lvjzyg5v>
← Volver al blog
</a> ${post && renderTemplate`<button class="btn btn-primary" onclick="showDemo()" data-astro-cid-lvjzyg5v>
✏️ Editar post
</button>`} </div> </div>  <div id="demoModal" class="modal" data-astro-cid-lvjzyg5v> <div class="modal-content" data-astro-cid-lvjzyg5v> <div class="modal-header" data-astro-cid-lvjzyg5v> <h3 data-astro-cid-lvjzyg5v>🚧 Función en desarrollo</h3> </div> <div class="modal-body" data-astro-cid-lvjzyg5v> <p data-astro-cid-lvjzyg5v>La edición de posts estará disponible cuando conectemos la base de datos persistente.</p> <p data-astro-cid-lvjzyg5v>Por ahora puedes disfrutar de la experiencia de lectura.</p> </div> <div class="modal-footer" data-astro-cid-lvjzyg5v> <button type="button" class="btn btn-primary" onclick="closeDemo()" data-astro-cid-lvjzyg5v>Entendido</button> </div> </div> </div>  ${renderScript($$result2, "C:/Users/CampusFP/Desktop/ELOY/Workspace/PracticaAstroDb/pruebas-astro-db/src/pages/posts/[id].astro?astro&type=script&index=0&lang.ts")} ` })}`;
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
