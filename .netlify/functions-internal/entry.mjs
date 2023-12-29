import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_29d4c5de.mjs';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_4c712df1.mjs';
import 'clsx';
import 'html-escaper';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/generic_6ac9a06d.mjs');
const _page1  = () => import('./chunks/index_df879029.mjs');
const _page2  = () => import('./chunks/preguntaRespuesta_d121706f.mjs');
const _page3  = () => import('./chunks/nosotros_d3ce9510.mjs');
const _page4  = () => import('./chunks/pruebas_89949ba5.mjs');
const _page5  = () => import('./chunks/_id__b693a092.mjs');
const _page6  = () => import('./chunks/01-posts_8621e9be.mjs');
const _page7  = () => import('./chunks/prueba_5e014778.mjs');
const _page8  = () => import('./chunks/blog_23b37fa2.mjs');
const _page9  = () => import('./chunks/404_c84df16e.mjs');
const _page10  = () => import('./chunks/fag_0e8eacc8.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/preguntaRespuesta.astro", _page2],["src/pages/nosotros.astro", _page3],["src/pages/pruebas.astro", _page4],["src/pages/launch/[id].astro", _page5],["src/pages/posts/01-posts.md", _page6],["src/pages/posts/prueba.md", _page7],["src/pages/blog.astro", _page8],["src/pages/404.astro", _page9],["src/pages/fag.astro", _page10]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
