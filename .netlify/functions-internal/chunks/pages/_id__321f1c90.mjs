import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as renderSlot, h as addAttribute, i as renderComponent, j as renderHead } from '../astro_79b998da.mjs';
import 'clsx';
/* empty css                             *//* empty css                          */
const $$Astro$5 = createAstro();
const $$MenuContainer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$MenuContainer;
  return renderTemplate`${maybeRenderHead()}<ul data-astro-cid-mh2e2gjc>${renderSlot($$result, $$slots["default"])}</ul>`;
}, "C:/xampp/htdocs/practicas-astro-js/src/components/MenuContainer.astro", void 0);

const $$Astro$4 = createAstro();
const $$MenuItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$MenuItem;
  const { title, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li data-astro-cid-jrov5ssf><a${addAttribute(url, "href")} data-astro-cid-jrov5ssf>${title}</a></li>`;
}, "C:/xampp/htdocs/practicas-astro-js/src/components/MenuItem.astro", void 0);

const menu_valores = [
  {
    title: "Home",
    url: "/"
  },
  {
    title: "Movies",
    url: "#movies"
  },
  {
    title: "Markdawon",
    url: "#markdawon"
  },
  {
    title: "Dibujos",
    url: "#dibujos"
  },
  {
    title: "Api",
    url: "#api"
  },
  {
    title: "Cartelera",
    url: "#cartelera"
  },
  {
    title: "Pokemones",
    url: "#pokemones"
  }
];

const $$Astro$3 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<nav data-astro-cid-3ef6ksr2>${renderComponent($$result, "MenuContainer", $$MenuContainer, { "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`${menu_valores.map((valor) => renderTemplate`${renderComponent($$result2, "MenuItem", $$MenuItem, { ...valor, "data-astro-cid-3ef6ksr2": true })}`)}` })}</nav>`;
}, "C:/xampp/htdocs/practicas-astro-js/src/components/Header.astro", void 0);

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head><body>${renderComponent($$result, "Header", $$Header, {})}<main>${renderSlot($$result, $$slots["default"])}</main></body></html>`;
}, "C:/xampp/htdocs/practicas-astro-js/src/layouts/Layout.astro", void 0);

const idconeccion = async ({ id }) => {
  const resultado1 = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const results = await resultado1.json();
  return results;
};
const apiconeccion = async () => {
  const resultado = await fetch("https://rickandmortyapi.com/api/character");
  const { results } = await resultado.json();
  return results;
};

const $$Astro$1 = createAstro();
const prerender$1 = false;
const $$id$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$id$1;
  const { id } = Astro2.params;
  let item;
  if (id) {
    item = await idconeccion({ id });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "pruebas", "data-astro-cid-2njxwe36": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section data-astro-cid-2njxwe36><img${addAttribute(item.image, "src")} alt="" data-astro-cid-2njxwe36><h2 data-astro-cid-2njxwe36>
Especie:
${item.species}<p data-astro-cid-2njxwe36> fecha de creacion: ${item.created}</p></h2></section>` })}`;
}, "C:/xampp/htdocs/practicas-astro-js/src/pages/detallePersonaje/[id].astro", void 0);

const $$file$1 = "C:/xampp/htdocs/practicas-astro-js/src/pages/detallePersonaje/[id].astro";
const $$url$1 = "/detallePersonaje/[id]";

const _id_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id$1,
    file: $$file$1,
    prerender: prerender$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  console.log(Astro2.params);
  const { id } = Astro2.params;
  return renderTemplate`${maybeRenderHead()}<section><h1>Pokemones</h1><p>${id}</p></section>`;
}, "C:/xampp/htdocs/practicas-astro-js/src/pages/detallePoke/[id].astro", void 0);

const $$file = "C:/xampp/htdocs/practicas-astro-js/src/pages/detallePoke/[id].astro";
const $$url = "/detallePoke/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Header as $, _id_$1 as _, apiconeccion as a, $$Layout as b, _id_ as c };
