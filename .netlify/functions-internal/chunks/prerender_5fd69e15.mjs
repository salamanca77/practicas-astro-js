import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent, h as addAttribute, u as unescapeHTML, g as renderSlot } from './astro_79b998da.mjs';
import 'clsx';
import { a as apiconeccion, $ as $$Header, b as $$Layout } from './pages/_id__52e96335.mjs';
/* empty css                          *//* empty css                          *//* empty css                            *//* empty css                             *//* empty css                            *//* empty css                        */
const $$Astro$j = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section id="/" data-astro-cid-bbe6dxrz><video controls autoplay loop src="/hero.mp4" data-astro-cid-bbe6dxrz></video></section>`;
}, "C:/xampp/htdocs/practicas-astro-js/src/components/Hero.astro", void 0);

const $$Astro$i = createAstro();
const $$Home = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Home;
  return renderTemplate`${maybeRenderHead()}<section>${renderComponent($$result, "Hero", $$Hero, {})}</section>`;
}, "C:/xampp/htdocs/practicas-astro-js/src/components/Home.astro", void 0);

const $$Astro$h = createAstro();
const $$Personajes = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Personajes;
  const { name, image, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-54ey2dut><a${addAttribute(`/detallePersonaje/${id}`, "href")} data-astro-cid-54ey2dut><img${addAttribute(image, "src")} alt="" data-astro-cid-54ey2dut><p data-astro-cid-54ey2dut>${name}</p></a></div>`;
}, "C:/xampp/htdocs/practicas-astro-js/src/components/Personajes.astro", void 0);

const $$Astro$g = createAstro();
const $$Movies = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Movies;
  const datos = await apiconeccion();
  return renderTemplate`${maybeRenderHead()}<section id="movies" data-astro-cid-ehhoux7e><h1 data-astro-cid-ehhoux7e>Movies</h1><article data-astro-cid-ehhoux7e>${datos.map(({ name, image, id }) => renderTemplate`${renderComponent($$result, "Personajes", $$Personajes, { "name": name, "image": image, "id": id, "data-astro-cid-ehhoux7e": true })}`)}</article></section>`;
}, "C:/xampp/htdocs/practicas-astro-js/src/components/Movies.astro", void 0);

const $$Astro$f = createAstro();
const $$PostVista = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$PostVista;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(posts.url, "href")} target="_blank" data-astro-cid-7es2c6jx><figure data-astro-cid-7es2c6jx><img${addAttribute(posts.frontmatter.image.url, "src")} alt="" data-astro-cid-7es2c6jx><figcaption data-astro-cid-7es2c6jx>${posts.frontmatter.title}</figcaption><figcaption data-astro-cid-7es2c6jx>${posts.frontmatter.description}</figcaption></figure></a>`;
}, "C:/xampp/htdocs/practicas-astro-js/src/components/PostVista.astro", void 0);

const $$Astro$e = createAstro();
const $$Markdawon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Markdawon;
  const posts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/posts/01-posts.md": () => Promise.resolve().then(() => _01Posts),"../pages/posts/02-posts.md": () => Promise.resolve().then(() => _02Posts)}), () => "../pages/posts/*.md");
  return renderTemplate`${maybeRenderHead()}<section id="markdawon" data-astro-cid-der75r2f><h1 data-astro-cid-der75r2f>markdawon</h1><article data-astro-cid-der75r2f>${posts.map((post) => renderTemplate`${renderComponent($$result, "PostVista", $$PostVista, { "posts": post, "data-astro-cid-der75r2f": true })}`)}</article></section>`;
}, "C:/xampp/htdocs/practicas-astro-js/src/components/Markdawon.astro", void 0);

const $$Astro$d = createAstro();
const $$Dibujos$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Dibujos$1;
  const respuesta = await fetch("https://rickandmortyapi.com/api/character");
  const { results } = await respuesta.json();
  return renderTemplate`${maybeRenderHead()}<section id="dibujos" data-astro-cid-htvhirvl><h1 data-astro-cid-htvhirvl>Dibujos</h1>${results.map((elemento) => renderTemplate`<figure data-astro-cid-htvhirvl><a${addAttribute(`/dibujos/${elemento.id}`, "href")} data-astro-cid-htvhirvl><p data-astro-cid-htvhirvl>${elemento.name}</p><img${addAttribute(elemento.image, "src")} alt="" width="200px" data-astro-cid-htvhirvl></a></figure>`)}</section>`;
}, "C:/xampp/htdocs/practicas-astro-js/src/components/Dibujos.astro", void 0);

const $$Astro$c = createAstro();
const $$Api = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Api;
  return renderTemplate`${maybeRenderHead()}<section id="api" data-astro-cid-eww6ggvw><h1 data-astro-cid-eww6ggvw>Pokemones Api</h1><div class="container" data-astro-cid-eww6ggvw><nav id="idNav" data-astro-cid-eww6ggvw></nav></div><div id="lista" class="classLista" data-astro-cid-eww6ggvw></div><template class="classTemplate" data-astro-cid-eww6ggvw><div data-astro-cid-eww6ggvw><img id="imgDos" class="classImg" alt="" data-astro-cid-eww6ggvw><figcaption class="classfigcaption" data-astro-cid-eww6ggvw></figcaption></div></template></section>`;
}, "C:/xampp/htdocs/practicas-astro-js/src/components/Api.astro", void 0);

const $$Astro$b = createAstro();
const $$Cartelera = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Cartelera;
  const respuesta = await fetch("https://api.themoviedb.org/3/discover/movie", {
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWVlMGY1OTgxYmYzNGE0MDMzNTFmYzQ4MjUzNDVlOSIsInN1YiI6IjY0ODVkYmUzOTkyNTljMDBlMmY1NzJjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2zu26OYNbQpBzwy3Xqpr5dm2qgz7f1hlTZU_BGbs264",
      "Contennt-type": "application/json"
    }
  });
  const data = await respuesta.json();
  const items = data.results;
  return renderTemplate`${maybeRenderHead()}<section id="cartelera" data-astro-cid-mnahvnxv><h1 data-astro-cid-mnahvnxv>Cartelera</h1><div data-astro-cid-mnahvnxv>${items.map((item) => renderTemplate`<figure data-astro-cid-mnahvnxv><img${addAttribute("https://image.tmdb.org/t/p/w200" + item.poster_path, "src")} alt="" data-astro-cid-mnahvnxv><figcaption data-astro-cid-mnahvnxv>${item.title}</figcaption></figure>`)}</div></section>`;
}, "C:/xampp/htdocs/practicas-astro-js/src/components/Cartelera.astro", void 0);

const url$5 = "https://pokeapi.co/api/v2/pokemon";
const resultPoke = async () => {
  const resultado = await fetch(url$5);
  const resulJson = await resultado.json();
  const { results } = resulJson;
  const datos = results.map(async (result) => {
    const respuesta = await fetch(result.url);
    const pokemones = await respuesta.json();
    return {
      id: pokemones.id,
      image: pokemones.sprites.other.dream_world.front_default
    };
  });
  const pokes = await Promise.all(datos);
  return pokes;
};

const $$Astro$a = createAstro();
const $$Poke = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Poke;
  const { id, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-x54ac4a5><a${addAttribute(`/detallePoke/${id}`, "href")} data-astro-cid-x54ac4a5><p data-astro-cid-x54ac4a5>${id}</p><img${addAttribute(image, "src")} alt="" data-astro-cid-x54ac4a5></a></div>`;
}, "C:/xampp/htdocs/practicas-astro-js/src/components/Poke.astro", void 0);

const $$Astro$9 = createAstro();
const $$Controles = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Controles;
  return renderTemplate`${maybeRenderHead()}<nav data-astro-cid-zu6bslup><a id="anterior" class="anterior" href="anterior" data-astro-cid-zu6bslup>Anterio</a><a id="siguiente" class="seguiente" href="siguiente" data-astro-cid-zu6bslup>Siguiente</a></nav>`;
}, "C:/xampp/htdocs/practicas-astro-js/src/components/Controles.astro", void 0);

const $$Astro$8 = createAstro();
const $$Pokemones = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Pokemones;
  const pokes = await resultPoke();
  console.log(pokes);
  return renderTemplate`${maybeRenderHead()}<section id="pokemones" data-astro-cid-ntf7sput><h1 data-astro-cid-ntf7sput>Pokemones</h1>${renderComponent($$result, "Controles", $$Controles, { "data-astro-cid-ntf7sput": true })}<figure data-astro-cid-ntf7sput>${pokes.map((poke) => renderTemplate`${renderComponent($$result, "Poke", $$Poke, { "id": poke.id, "image": poke.image, "data-astro-cid-ntf7sput": true })}`)}</figure></section>`;
}, "C:/xampp/htdocs/practicas-astro-js/src/components/Pokemones.astro", void 0);

const $$Astro$7 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pagina de prueba con Astro" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, {})}${renderComponent($$result2, "Home", $$Home, {})}${renderComponent($$result2, "Movies", $$Movies, {})}${renderComponent($$result2, "Markdawon", $$Markdawon, {})}${renderComponent($$result2, "Dibujos", $$Dibujos$1, {})}${renderComponent($$result2, "Api", $$Api, {})}${renderComponent($$result2, "Cartelera", $$Cartelera, {})}${renderComponent($$result2, "Pokemones", $$Pokemones, {})}` })}`;
}, "C:/xampp/htdocs/practicas-astro-js/src/pages/index.astro", void 0);

const $$file$4 = "C:/xampp/htdocs/practicas-astro-js/src/pages/index.astro";
const $$url$4 = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file$4,
    url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$6 = createAstro();
const prerender = true;
const $$id$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$id$1;
  console.log(Astro2.params);
  const { id } = Astro2.params;
  return renderTemplate`${maybeRenderHead()}<section><h1>Pokemones</h1><p>${id}</p></section>`;
}, "C:/xampp/htdocs/practicas-astro-js/src/pages/detallePoke/[id].astro", void 0);

const $$file$3 = "C:/xampp/htdocs/practicas-astro-js/src/pages/detallePoke/[id].astro";
const $$url$3 = "/detallePoke/[id]";

const _id_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id$1,
    file: $$file$3,
    prerender,
    url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro();
const getStaticPaths = async () => {
  const respuesta = await fetch("https://rickandmortyapi.com/api/character");
  const { results } = await respuesta.json();
  return results.map((elemento) => ({ params: { id: elemento.id } }));
};
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  return renderTemplate`${maybeRenderHead()}<section><h1>Detalles</h1><p>${id}</p></section>`;
}, "C:/xampp/htdocs/practicas-astro-js/src/pages/dibujos/[id].astro", void 0);

const $$file$2 = "C:/xampp/htdocs/practicas-astro-js/src/pages/dibujos/[id].astro";
const $$url$2 = "/dibujos/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file$2,
    getStaticPaths,
    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro();
const $$Dibujos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Dibujos;
  const datos = await apiconeccion();
  console.log(datos);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pagina de prueba", "data-astro-cid-36jpbagx": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section data-astro-cid-36jpbagx><article data-astro-cid-36jpbagx>${datos.map(({ name, image, id }) => renderTemplate`${renderComponent($$result2, "Personajes", $$Personajes, { "name": name, "image": image, "id": id, "data-astro-cid-36jpbagx": true })}`)}</article></section>` })}`;
}, "C:/xampp/htdocs/practicas-astro-js/src/pages/dibujos.astro", void 0);

const $$file$1 = "C:/xampp/htdocs/practicas-astro-js/src/pages/dibujos.astro";
const $$url$1 = "/dibujos";

const dibujos = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Dibujos,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const html$4 = "<h1 id=\"nuevo-juego-de-harry-potter-en-desarrollo\">Nuevo juego de Harry Potter en desarrollo</h1>\n<p><img src=\"/assets/image-post-01.jpg\" alt=\"Alt text\" title=\"a title\"></p>\n<p>Warner Bros. Games ha anunciado el desarrollo de un nuevo juego basado en el universo de Harry Potter. El juego, que aún no tiene título confirmado, será un RPG de mundo abierto en el que los jugadores podrán explorar Hogwarts y sus alrededores.</p>\n<p>El juego se ambientará en el siglo XIX, mucho antes de los eventos de la serie de libros de Harry Potter. Los jugadores podrán crear su propio personaje y asistir a clases de magia en Hogwarts, aprender nuevos hechizos y enfrentarse a criaturas mágicas peligrosas.</p>\n<p>El juego está siendo desarrollado por Avalanche Software, el estudio detrás de títulos como Disney Infinity y Cars 3: Driven to Win. Aún no se ha anunciado una fecha de lanzamiento oficial, pero se espera que salga a la venta en algún momento de los próximos años.</p>";

				const frontmatter$4 = {"title":"Mark uno","author":"Marcos Rivas","description":"Warner Bros. Games ha anunciado el desarrollo de un nuevo juego basado en el universo de Harry Potter. El juego, que aún no tiene título confirmado, será un RPG de mundo abierto en el que los jugadores podrán explorar Hogwarts y sus alrededores.","image":{"url":"/tierra.jpg","alt":"The word “astro” against an illustration of planets and stars."},"pubDate":"2022-08-08T00:00:00.000Z","tags":["harry","news"]};
				const file$4 = "C:/xampp/htdocs/practicas-astro-js/src/pages/posts/01-posts.md";
				const url$4 = "/posts/01-posts";
				function rawContent$4() {
					return "\r\n# Nuevo juego de Harry Potter en desarrollo\r\n\r\n![Alt text](/assets/image-post-01.jpg \"a title\")\r\n\r\nWarner Bros. Games ha anunciado el desarrollo de un nuevo juego basado en el universo de Harry Potter. El juego, que aún no tiene título confirmado, será un RPG de mundo abierto en el que los jugadores podrán explorar Hogwarts y sus alrededores.\r\n\r\nEl juego se ambientará en el siglo XIX, mucho antes de los eventos de la serie de libros de Harry Potter. Los jugadores podrán crear su propio personaje y asistir a clases de magia en Hogwarts, aprender nuevos hechizos y enfrentarse a criaturas mágicas peligrosas.\r\n\r\nEl juego está siendo desarrollado por Avalanche Software, el estudio detrás de títulos como Disney Infinity y Cars 3: Driven to Win. Aún no se ha anunciado una fecha de lanzamiento oficial, pero se espera que salga a la venta en algún momento de los próximos años.\r\n\r\n ";
				}
				function compiledContent$4() {
					return html$4;
				}
				function getHeadings$4() {
					return [{"depth":1,"slug":"nuevo-juego-de-harry-potter-en-desarrollo","text":"Nuevo juego de Harry Potter en desarrollo"}];
				}

				const Content$4 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$4;
					content.file = file$4;
					content.url = url$4;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$4)}`;
				});

const _01Posts = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    Content: Content$4,
    compiledContent: compiledContent$4,
    default: Content$4,
    file: file$4,
    frontmatter: frontmatter$4,
    getHeadings: getHeadings$4,
    rawContent: rawContent$4,
    url: url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
const $$LayoutOtro = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LayoutOtro;
  const { frontmatter } = Astro2.props;
  console.log(frontmatter);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Otro", "data-astro-cid-c6dyunom": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section data-astro-cid-c6dyunom><header data-astro-cid-c6dyunom><h1 data-astro-cid-c6dyunom>${frontmatter.title}</h1><p data-astro-cid-c6dyunom>${frontmatter.description}</p></header><article data-astro-cid-c6dyunom><div data-astro-cid-c6dyunom>${renderSlot($$result2, $$slots["default"])}</div></article></section>` })}`;
}, "C:/xampp/htdocs/practicas-astro-js/src/layouts/LayoutOtro.astro", void 0);

const html$3 = "";

				const frontmatter$3 = {"layout":"../../layouts/LayoutOtro.astro","title":"Una nueva aventura ha comenzado","author":"Marcos Rivas","description":"Warner Bros. Games ha anunciado el desarrollo de un nuevo juego basado en el universo de Harry Potter. El juego, que aún no tiene título confirmado, será un RPG de mundo abierto en el que los jugadores podrán explorar Hogwarts y sus alrededores.","image":{"url":"/tierra.jpg","alt":"The word “astro” against an illustration of planets and stars."},"pubDate":"2022-08-08T00:00:00.000Z","tags":["harry","news"]};
				const file$3 = "C:/xampp/htdocs/practicas-astro-js/src/pages/posts/02-posts.md";
				const url$3 = "/posts/02-posts";
				function rawContent$3() {
					return "\r\n\r\n";
				}
				function compiledContent$3() {
					return html$3;
				}
				function getHeadings$3() {
					return [];
				}

				const Content$3 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3;
					content.file = file$3;
					content.url = url$3;

					return renderTemplate`${renderComponent(result, 'Layout', $$LayoutOtro, {
								file: file$3,
								url: url$3,
								content,
								frontmatter: content,
								headings: getHeadings$3(),
								rawContent: rawContent$3,
								compiledContent: compiledContent$3,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html$3)}`
							})}`;
				});

const _02Posts = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    Content: Content$3,
    compiledContent: compiledContent$3,
    default: Content$3,
    file: file$3,
    frontmatter: frontmatter$3,
    getHeadings: getHeadings$3,
    rawContent: rawContent$3,
    url: url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$DisUno = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$DisUno;
  const datos = Astro2.props;
  console.log(datos);
  const { frontmatter } = Astro2.props;
  console.log(frontmatter);
  return renderTemplate`${maybeRenderHead()}<h1>mark uno</h1>${renderSlot($$result, $$slots["default"])}${frontmatter.titulo}`;
}, "C:/xampp/htdocs/practicas-astro-js/src/layouts/DisUno.astro", void 0);

const html$2 = "<h1 id=\"titulo\">Titulo</h1>\n<h2 id=\"descriptcion\">Descriptcion</h2>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span>funcion()</span></span>\n<span class=\"line\"><span>funcion()</span></span></code></pre>";

				const frontmatter$2 = {"layout":"../../layouts/DisUno.astro","titulo":"Mark uno","autor":"Marcos Rivas","descripcion":"Warner Bros. Games ha anunciado el desarrollo de un nuevo juego basado en el universo de Harry Potter. El juego"};
				const file$2 = "C:/xampp/htdocs/practicas-astro-js/src/pages/mark/01-mark.md";
				const url$2 = "/mark/01-mark";
				function rawContent$2() {
					return "# Titulo\r\n## Descriptcion\r\n```\r\nfuncion()\r\nfuncion()\r\n```";
				}
				function compiledContent$2() {
					return html$2;
				}
				function getHeadings$2() {
					return [{"depth":1,"slug":"titulo","text":"Titulo"},{"depth":2,"slug":"descriptcion","text":"Descriptcion"}];
				}

				const Content$2 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2;
					content.file = file$2;
					content.url = url$2;

					return renderTemplate`${renderComponent(result, 'Layout', $$DisUno, {
								file: file$2,
								url: url$2,
								content,
								frontmatter: content,
								headings: getHeadings$2(),
								rawContent: rawContent$2,
								compiledContent: compiledContent$2,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html$2)}`
							})}`;
				});

const _01Mark = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    Content: Content$2,
    compiledContent: compiledContent$2,
    default: Content$2,
    file: file$2,
    frontmatter: frontmatter$2,
    getHeadings: getHeadings$2,
    rawContent: rawContent$2,
    url: url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$LayoutBlog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LayoutBlog;
  const { frontmatter } = Astro2.props;
  console.log(frontmatter);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Layout blog", "data-astro-cid-m337sa5b": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section data-astro-cid-m337sa5b><h1 data-astro-cid-m337sa5b>${frontmatter.titulo}</h1>${renderSlot($$result2, $$slots["default"])}</section>` })}`;
}, "C:/xampp/htdocs/practicas-astro-js/src/layouts/LayoutBlog.astro", void 0);

const html$1 = "";

				const frontmatter$1 = {"layout":"../../layouts/LayoutBlog.astro","titulo":"Mark dos","autor":"Marcos Rivas","descripcion":"Warner Bros. Games ha anunciado el desarrollo de un nuevo juego basado en el universo de Harry Potter. El juego, que aún no tiene título confirmado, será un RPG de mundo abierto en el que los jugadores podrán explorar Hogwarts y sus alrededores."};
				const file$1 = "C:/xampp/htdocs/practicas-astro-js/src/pages/mark/02-mark.md";
				const url$1 = "/mark/02-mark";
				function rawContent$1() {
					return "";
				}
				function compiledContent$1() {
					return html$1;
				}
				function getHeadings$1() {
					return [];
				}

				const Content$1 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1;
					content.file = file$1;
					content.url = url$1;

					return renderTemplate`${renderComponent(result, 'Layout', $$LayoutBlog, {
								file: file$1,
								url: url$1,
								content,
								frontmatter: content,
								headings: getHeadings$1(),
								rawContent: rawContent$1,
								compiledContent: compiledContent$1,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html$1)}`
							})}`;
				});

const _02Mark = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    Content: Content$1,
    compiledContent: compiledContent$1,
    default: Content$1,
    file: file$1,
    frontmatter: frontmatter$1,
    getHeadings: getHeadings$1,
    rawContent: rawContent$1,
    url: url$1
}, Symbol.toStringTag, { value: 'Module' }));

const html = "";

				const frontmatter = {"layout":"../../layouts/LayoutBlog.astro","titulo":"Mark tres","autor":"Marcos Rivas","descripcion":"Warner Bros. Games ha anunciado el desarrollo de un nuevo juego basado en el universo de Harry Potter. El juego, que aún no tiene título confirmado, será un RPG de mundo abierto en el que los jugadores podrán explorar Hogwarts y sus alrededores."};
				const file = "C:/xampp/htdocs/practicas-astro-js/src/pages/mark/03-mark.md";
				const url = "/mark/03-mark";
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$LayoutBlog, {
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

const _03Mark = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    Content,
    compiledContent,
    default: Content,
    file,
    frontmatter,
    getHeadings,
    rawContent,
    url
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${maybeRenderHead()}<h1 data-astro-cid-zetdm5md>
404
</h1>`;
}, "C:/xampp/htdocs/practicas-astro-js/src/pages/404.astro", void 0);

const $$file = "C:/xampp/htdocs/practicas-astro-js/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _id_$1 as _, _id_ as a, _01Posts as b, _02Posts as c, dibujos as d, _01Mark as e, _02Mark as f, _03Mark as g, _404 as h, index as i };
