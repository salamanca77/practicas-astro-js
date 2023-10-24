import { f as createAstro, e as createComponent, r as renderTemplate, m as maybeRenderHead, g as renderSlot, h as addAttribute, i as renderComponent, j as renderHead } from '../astro_4c712df1.mjs';
import 'clsx';
/* empty css                            *//* empty css                          */
const $$Astro$4 = createAstro();
const $$MenuContainer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$MenuContainer;
  return renderTemplate`${maybeRenderHead()}<ul data-astro-cid-mh2e2gjc>${renderSlot($$result, $$slots["default"])}</ul>`;
}, "C:/xampp/htdocs/practicas-astro-js/src/components/MenuContainer.astro", void 0);

const $$Astro$3 = createAstro();
const $$MenuItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
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
    title: "FAQ",
    url: "/fag"
  },
  {
    title: "Blog",
    url: "/blog"
  },
  {
    title: "Prueba",
    url: "/pruebas"
  },
  {
    title: "Preguntas",
    url: "/preguntaRespuesta"
  },
  {
    title: "blog5",
    url: "/nosotros"
  }
];

const $$Astro$2 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<nav data-astro-cid-3ef6ksr2><div class="logo" data-astro-cid-3ef6ksr2><p data-astro-cid-3ef6ksr2>Logo</p></div>${renderComponent($$result, "MenuContainer", $$MenuContainer, { "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`${menu_valores.map((valor) => renderTemplate`${renderComponent($$result2, "MenuItem", $$MenuItem, { ...valor, "data-astro-cid-3ef6ksr2": true })}`)}` })}</nav>`;
}, "C:/xampp/htdocs/practicas-astro-js/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
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
  console.log(results);
  return results;
};

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  console.log({ id });
  let item;
  if (id) {
    item = await idconeccion({ id });
  }
  console.log(item);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "pruebas", "data-astro-cid-e7vklqk6": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section data-astro-cid-e7vklqk6><img${addAttribute(item.image, "src")} alt="" data-astro-cid-e7vklqk6><h2 data-astro-cid-e7vklqk6>
Especie:
${item.species}<p data-astro-cid-e7vklqk6> fecha de creacion: ${item.created}</p></h2></section>` })}`;
}, "C:/xampp/htdocs/practicas-astro-js/src/pages/launch/[id].astro", void 0);

const $$file = "C:/xampp/htdocs/practicas-astro-js/src/pages/launch/[id].astro";
const $$url = "/launch/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _id_ as _, apiconeccion as a };
