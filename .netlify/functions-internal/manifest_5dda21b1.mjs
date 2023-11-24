import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_79b998da.mjs';
import 'clsx';
import 'mime';
import { compile } from 'path-to-regexp';
import 'html-escaper';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"dibujos/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/dibujos","type":"page","pattern":"^\\/dibujos\\/?$","segments":[[{"content":"dibujos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dibujos.astro","pathname":"/dibujos","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"posts/01-posts/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts/01-posts","type":"page","pattern":"^\\/posts\\/01-posts\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"01-posts","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/01-posts.md","pathname":"/posts/01-posts","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"posts/02-posts/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts/02-posts","type":"page","pattern":"^\\/posts\\/02-posts\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"02-posts","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/02-posts.md","pathname":"/posts/02-posts","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"mark/01-mark/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/mark/01-mark","type":"page","pattern":"^\\/mark\\/01-mark\\/?$","segments":[[{"content":"mark","dynamic":false,"spread":false}],[{"content":"01-mark","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/mark/01-mark.md","pathname":"/mark/01-mark","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"mark/02-mark/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/mark/02-mark","type":"page","pattern":"^\\/mark\\/02-mark\\/?$","segments":[[{"content":"mark","dynamic":false,"spread":false}],[{"content":"02-mark","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/mark/02-mark.md","pathname":"/mark/02-mark","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"mark/03-mark/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/mark/03-mark","type":"page","pattern":"^\\/mark\\/03-mark\\/?$","segments":[[{"content":"mark","dynamic":false,"spread":false}],[{"content":"03-mark","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/mark/03-mark.md","pathname":"/mark/03-mark","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"section[data-astro-cid-2njxwe36]{height:100vh;padding-top:50px;color:#000;display:flex;justify-content:center;align-items:center;flex-wrap:wrap}section[data-astro-cid-2njxwe36] img[data-astro-cid-2njxwe36]{width:300px;height:400px;object-fit:cover;background-color:#0ff;margin-right:15px}\nul[data-astro-cid-mh2e2gjc]{position:absolute;width:100%;height:100%;list-style:none;display:flex;justify-content:center;align-items:center}li[data-astro-cid-jrov5ssf] a[data-astro-cid-jrov5ssf]{cursor:pointer;text-decoration:none;color:#fff;display:block;text-align:center;padding:30px}nav[data-astro-cid-3ef6ksr2]{position:fixed;display:flex;top:0;width:100%;height:50px;justify-content:space-around;align-items:center;background-color:gray;z-index:100}body{border:0;margin:0;background-color:#444654;color:#fff}\n"}],"routeData":{"route":"/detallepersonaje/[id]","type":"page","pattern":"^\\/detallePersonaje\\/([^/]+?)\\/?$","segments":[[{"content":"detallePersonaje","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/detallePersonaje/[id].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/detallepoke/[id]","type":"page","pattern":"^\\/detallePoke\\/([^/]+?)\\/?$","segments":[[{"content":"detallePoke","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/detallePoke/[id].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":true,"componentMetadata":[["C:/xampp/htdocs/practicas-astro-js/src/pages/mark/02-mark.md",{"propagation":"none","containsHead":true}],["C:/xampp/htdocs/practicas-astro-js/src/pages/mark/03-mark.md",{"propagation":"none","containsHead":true}],["C:/xampp/htdocs/practicas-astro-js/src/pages/posts/02-posts.md",{"propagation":"none","containsHead":true}],["C:/xampp/htdocs/practicas-astro-js/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/xampp/htdocs/practicas-astro-js/src/pages/detallePersonaje/[id].astro",{"propagation":"none","containsHead":true}],["C:/xampp/htdocs/practicas-astro-js/src/pages/dibujos.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_db657cb9.mjs","\u0000@astrojs-manifest":"manifest_5dda21b1.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_b47856ee.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_091d2c7a.mjs","\u0000@astro-page:src/pages/detallePersonaje/[id]@_@astro":"chunks/_id__9a87a0e1.mjs","\u0000@astro-page:src/pages/detallePoke/[id]@_@astro":"chunks/_id__29c836ec.mjs","\u0000@astro-page:src/pages/dibujos/[id]@_@astro":"chunks/_id__29a9d57c.mjs","\u0000@astro-page:src/pages/dibujos@_@astro":"chunks/dibujos_a7d220b2.mjs","\u0000@astro-page:src/pages/posts/01-posts@_@md":"chunks/01-posts_edc3c869.mjs","\u0000@astro-page:src/pages/posts/02-posts@_@md":"chunks/02-posts_ff81da27.mjs","\u0000@astro-page:src/pages/mark/01-mark@_@md":"chunks/01-mark_b01f74f5.mjs","\u0000@astro-page:src/pages/mark/02-mark@_@md":"chunks/02-mark_7865935a.mjs","\u0000@astro-page:src/pages/mark/03-mark@_@md":"chunks/03-mark_093c2e2a.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_b0b26b57.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.da777613.js","astro:scripts/before-hydration.js":""},"assets":["/favicon.svg","/hero.mp4","/tierra.jpg","/index.html","/dibujos/index.html","/posts/01-posts/index.html","/posts/02-posts/index.html","/mark/01-mark/index.html","/mark/02-mark/index.html","/mark/03-mark/index.html","/404.html"]});

export { manifest };
