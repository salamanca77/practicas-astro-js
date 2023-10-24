import { f as createAstro, e as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderComponent } from '../astro_4c712df1.mjs';
import 'clsx';
import { a as apiconeccion, $ as $$Layout } from './_id__6991b5bb.mjs';
/* empty css                             */import 'html-escaper';
/* empty css                            *//* empty css                          */
const $$Astro$1 = createAstro();
const $$Personajes = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Personajes;
  const { name, image, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-54ey2dut><a${addAttribute(`/launch/${id}`, "href")} data-astro-cid-54ey2dut><img${addAttribute(image, "src")} alt="" data-astro-cid-54ey2dut><p data-astro-cid-54ey2dut>${name}</p></a></div>`;
}, "C:/xampp/htdocs/practicas-astro-js/src/components/Personajes.astro", void 0);

const $$Astro = createAstro();
const $$Pruebas = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pruebas;
  const datos = await apiconeccion();
  console.log(datos);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pagina de prueba", "data-astro-cid-fpw3d5kw": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section data-astro-cid-fpw3d5kw><article data-astro-cid-fpw3d5kw><!-- <div> -->${datos.map(({ name, image, id }) => renderTemplate`${renderComponent($$result2, "Personajes", $$Personajes, { "name": name, "image": image, "id": id, "data-astro-cid-fpw3d5kw": true })}`)}<!-- </div> --></article></section>` })}`;
}, "C:/xampp/htdocs/practicas-astro-js/src/pages/pruebas.astro", void 0);

const $$file = "C:/xampp/htdocs/practicas-astro-js/src/pages/pruebas.astro";
const $$url = "/pruebas";

export { $$Pruebas as default, $$file as file, $$url as url };
