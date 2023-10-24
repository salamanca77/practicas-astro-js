import { f as createAstro, e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, g as renderSlot, u as unescapeHTML } from '../astro_4c712df1.mjs';
import 'clsx';
import { $ as $$Layout } from './_id__6991b5bb.mjs';
/* empty css                            */import 'html-escaper';
/* empty css                            *//* empty css                          */
const $$Astro = createAstro();
const $$LayoutOtro = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LayoutOtro;
  const { frontmatter } = Astro2.props;
  console.log(frontmatter);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Otro", "data-astro-cid-c6dyunom": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section data-astro-cid-c6dyunom><header data-astro-cid-c6dyunom><h1 data-astro-cid-c6dyunom>${frontmatter.title}</h1><p data-astro-cid-c6dyunom>${frontmatter.description}</p></header><article data-astro-cid-c6dyunom><div data-astro-cid-c6dyunom>${renderSlot($$result2, $$slots["default"])}</div></article></section>` })}`;
}, "C:/xampp/htdocs/practicas-astro-js/src/layouts/LayoutOtro.astro", void 0);

const html = "<h1 id=\"aprendiendo-mardown\">Aprendiendo <em>mardown</em></h1>\n<h2 id=\"nivel-2\">Nivel 2</h2>\n<p>Parrafo del sugundo nivel <strong>Nivel 2</strong></p>\n<!-- ![imagen](/public/tierra.jpg) -->\n<ol>\n<li>nivel uno</li>\n<li>nivel dos</li>\n<li>nivel tres</li>\n<li>nivel cuatro</li>\n<li>nivel cinco\n<ol>\n<li>Subnivel</li>\n<li>Subnivel</li>\n<li>Subnivel</li>\n<li>Subnivel\n<ul>\n<li>Otron nivel</li>\n<li>Otron ninvel</li>\n</ul>\n<ul>\n<li>Otron nivel</li>\n</ul>\n</li>\n</ol>\n</li>\n</ol>\n<blockquote>\n<p>Esta se una cita.</p>\n</blockquote>\n<blockquote>\n<p>Esta es otro cita.ssas\r\naaaaasasas</p>\n</blockquote>\n<blockquote>\n<p>Esta la tercera cita.</p>\n<p>otro</p>\n<p>otro mas</p>\n</blockquote>\n<p>| Nombre | Apellido | Telefono |</p>\n<p>| --- |</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#E1E4E8\">funcion </span><span style=\"color:#B392F0\">suma</span><span style=\"color:#E1E4E8\">(){</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">    return</span><span style=\"color:#E1E4E8\"> a </span><span style=\"color:#F97583\">+</span><span style=\"color:#E1E4E8\"> b</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">}</span></span></code></pre>\n<p>Lorem\r\nLos fans de <code>Harry</code> Potter han mostrado una gran emoción ante el anuncio de este nuevo juego, y muchos están ansiosos por explorar el mundo mágico de Hogwarts en una experiencia de juego completamente nueva.</p>\n<p>**negrita**</p>";

				const frontmatter = {"layout":"../../layouts/LayoutOtro.astro","title":"Una nueva aventura ha comenzado","author":"Marcos Rivas","description":"Warner Bros. Games ha anunciado el desarrollo de un nuevo juego basado en el universo de Harry Potter. El juego, que aún no tiene título confirmado, será un RPG de mundo abierto en el que los jugadores podrán explorar Hogwarts y sus alrededores.","image":{"url":"/tierra.jpg","alt":"The word “astro” against an illustration of planets and stars."},"pubDate":"2022-08-08T00:00:00.000Z","tags":["harry","news"]};
				const file = "C:/xampp/htdocs/practicas-astro-js/src/pages/posts/prueba.md";
				const url = "/posts/prueba";
				function rawContent() {
					return "\r\n\r\n# Aprendiendo _mardown_\r\n## Nivel 2\r\nParrafo del sugundo nivel **Nivel 2**\r\n<!-- ![imagen](/public/tierra.jpg) -->\r\n1. nivel uno\r\n1. nivel dos\r\n1. nivel tres\r\n1. nivel cuatro\r\n1. nivel cinco\r\n    1. Subnivel \r\n    1. Subnivel\r\n    1. Subnivel\r\n    1. Subnivel\r\n        * Otron nivel\r\n        * Otron ninvel\r\n        - Otron nivel\r\n\r\n> Esta se una cita.\r\n\r\n> Esta es otro cita.ssas\r\naaaaasasas\r\n\r\n\r\n> Esta la tercera cita.\r\n>\r\n>otro\r\n>\r\n>otro mas\r\n\r\n| Nombre | Apellido | Telefono |\r\n\r\n| --- |\r\n\r\n```js\r\nfuncion suma(){\r\n    return a + b\r\n}\r\n``````\r\nLorem\r\nLos fans de `Harry` Potter han mostrado una gran emoción ante el anuncio de este nuevo juego, y muchos están ansiosos por explorar el mundo mágico de Hogwarts en una experiencia de juego completamente nueva.\r\n\r\n\\*\\*negrita\\*\\*";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"aprendiendo-mardown","text":"Aprendiendo mardown"},{"depth":2,"slug":"nivel-2","text":"Nivel 2"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$LayoutOtro, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
