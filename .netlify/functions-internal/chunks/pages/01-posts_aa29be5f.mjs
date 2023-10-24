import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_4c712df1.mjs';
import 'clsx';
import 'html-escaper';

const html = "<h1 id=\"nuevo-juego-de-harry-potter-en-desarrollo\">Nuevo juego de Harry Potter en desarrollo</h1>\n<p><img src=\"/assets/image-post-01.jpg\" alt=\"Alt text\" title=\"a title\"></p>\n<p>Warner Bros. Games ha anunciado el desarrollo de un nuevo juego basado en el universo de Harry Potter. El juego, que aún no tiene título confirmado, será un RPG de mundo abierto en el que los jugadores podrán explorar Hogwarts y sus alrededores.</p>\n<p>El juego se ambientará en el siglo XIX, mucho antes de los eventos de la serie de libros de Harry Potter. Los jugadores podrán crear su propio personaje y asistir a clases de magia en Hogwarts, aprender nuevos hechizos y enfrentarse a criaturas mágicas peligrosas.</p>\n<p>El juego está siendo desarrollado por Avalanche Software, el estudio detrás de títulos como Disney Infinity y Cars 3: Driven to Win. Aún no se ha anunciado una fecha de lanzamiento oficial, pero se espera que salga a la venta en algún momento de los próximos años.</p>";

				const frontmatter = {"title":"Una nueva aventura ha comenzado","author":"Marcos Rivas","description":"Warner Bros. Games ha anunciado el desarrollo de un nuevo juego basado en el universo de Harry Potter. El juego, que aún no tiene título confirmado, será un RPG de mundo abierto en el que los jugadores podrán explorar Hogwarts y sus alrededores.","image":{"url":"/tierra.jpg","alt":"The word “astro” against an illustration of planets and stars."},"pubDate":"2022-08-08T00:00:00.000Z","tags":["harry","news"]};
				const file = "C:/xampp/htdocs/practicas-astro-js/src/pages/posts/01-posts.md";
				const url = "/posts/01-posts";
				function rawContent() {
					return "\r\n# Nuevo juego de Harry Potter en desarrollo\r\n\r\n![Alt text](/assets/image-post-01.jpg \"a title\")\r\n\r\nWarner Bros. Games ha anunciado el desarrollo de un nuevo juego basado en el universo de Harry Potter. El juego, que aún no tiene título confirmado, será un RPG de mundo abierto en el que los jugadores podrán explorar Hogwarts y sus alrededores.\r\n\r\nEl juego se ambientará en el siglo XIX, mucho antes de los eventos de la serie de libros de Harry Potter. Los jugadores podrán crear su propio personaje y asistir a clases de magia en Hogwarts, aprender nuevos hechizos y enfrentarse a criaturas mágicas peligrosas.\r\n\r\nEl juego está siendo desarrollado por Avalanche Software, el estudio detrás de títulos como Disney Infinity y Cars 3: Driven to Win. Aún no se ha anunciado una fecha de lanzamiento oficial, pero se espera que salga a la venta en algún momento de los próximos años.\r\n\r\n ";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"nuevo-juego-de-harry-potter-en-desarrollo","text":"Nuevo juego de Harry Potter en desarrollo"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
