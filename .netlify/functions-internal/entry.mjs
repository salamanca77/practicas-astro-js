import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_5dda21b1.mjs';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_79b998da.mjs';
import 'clsx';
import 'html-escaper';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/generic_b47856ee.mjs');
const _page1  = () => import('./chunks/index_091d2c7a.mjs');
const _page2  = () => import('./chunks/_id__9a87a0e1.mjs');
const _page3  = () => import('./chunks/_id__29c836ec.mjs');
const _page4  = () => import('./chunks/_id__29a9d57c.mjs');
const _page5  = () => import('./chunks/dibujos_a7d220b2.mjs');
const _page6  = () => import('./chunks/01-posts_edc3c869.mjs');
const _page7  = () => import('./chunks/02-posts_ff81da27.mjs');
const _page8  = () => import('./chunks/01-mark_b01f74f5.mjs');
const _page9  = () => import('./chunks/02-mark_7865935a.mjs');
const _page10  = () => import('./chunks/03-mark_093c2e2a.mjs');
const _page11  = () => import('./chunks/404_b0b26b57.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/detallePersonaje/[id].astro", _page2],["src/pages/detallePoke/[id].astro", _page3],["src/pages/dibujos/[id].astro", _page4],["src/pages/dibujos.astro", _page5],["src/pages/posts/01-posts.md", _page6],["src/pages/posts/02-posts.md", _page7],["src/pages/mark/01-mark.md", _page8],["src/pages/mark/02-mark.md", _page9],["src/pages/mark/03-mark.md", _page10],["src/pages/404.astro", _page11]]);
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
