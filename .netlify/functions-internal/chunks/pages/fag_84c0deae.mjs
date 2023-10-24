import { f as createAstro, e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_4c712df1.mjs';
import 'clsx';
import { $ as $$Layout } from './_id__6991b5bb.mjs';
/* empty css                         */import 'html-escaper';
/* empty css                            *//* empty css                          */
const $$Astro = createAstro();
const $$Fag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Fag;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Fag", "data-astro-cid-jpfqaikw": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section data-astro-cid-jpfqaikw><h1 data-astro-cid-jpfqaikw>Flag</h1></section>` })}`;
}, "C:/xampp/htdocs/practicas-astro-js/src/pages/fag.astro", void 0);

const $$file = "C:/xampp/htdocs/practicas-astro-js/src/pages/fag.astro";
const $$url = "/fag";

export { $$Fag as default, $$file as file, $$url as url };
