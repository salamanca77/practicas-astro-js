import { f as createAstro, e as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent } from '../astro_4c712df1.mjs';
import 'clsx';
import { $ as $$Layout } from './_id__6991b5bb.mjs';
/* empty css                           */import 'html-escaper';
/* empty css                            *//* empty css                          */
const $$Astro$1 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-bbe6dxrz><video autoplay loop src="/hero.mp4" data-astro-cid-bbe6dxrz></video></section>`;
}, "C:/xampp/htdocs/practicas-astro-js/src/components/Hero.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pagina de prueba con Astro" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Hero", $$Hero, {})}` })}`;
}, "C:/xampp/htdocs/practicas-astro-js/src/pages/index.astro", void 0);

const $$file = "C:/xampp/htdocs/practicas-astro-js/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
