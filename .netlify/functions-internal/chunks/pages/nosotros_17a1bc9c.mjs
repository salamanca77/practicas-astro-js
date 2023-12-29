import { f as createAstro, e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_4c712df1.mjs';
import 'clsx';
import { $ as $$Layout } from './_id__6991b5bb.mjs';
/* empty css                              */import 'html-escaper';
/* empty css                            *//* empty css                          */
const $$Astro = createAstro();
const $$Nosotros = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Nosotros;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nosotros", "data-astro-cid-noeej2nj": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section data-astro-cid-noeej2nj><h1 data-astro-cid-noeej2nj>Nosotros</h1></section>` })}`;
}, "C:/xampp/htdocs/practicas-astro-js/src/pages/nosotros.astro", void 0);

const $$file = "C:/xampp/htdocs/practicas-astro-js/src/pages/nosotros.astro";
const $$url = "/nosotros";

export { $$Nosotros as default, $$file as file, $$url as url };
