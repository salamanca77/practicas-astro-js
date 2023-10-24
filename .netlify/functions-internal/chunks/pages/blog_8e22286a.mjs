import { f as createAstro, e as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderComponent } from '../astro_4c712df1.mjs';
import 'clsx';
/* empty css                          */import { $ as $$Layout } from './_id__6991b5bb.mjs';
import 'html-escaper';
/* empty css                            *//* empty css                          */
const $$Astro$1 = createAstro();
const $$PostVista = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostVista;
  const { posts } = Astro2.props;
  console.log(posts);
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(posts.url, "href")} target="_blank" data-astro-cid-7es2c6jx><img${addAttribute(posts.frontmatter.image.url, "src")} alt="" data-astro-cid-7es2c6jx><div class="title" data-astro-cid-7es2c6jx>${posts.frontmatter.title}</div><div class="description" data-astro-cid-7es2c6jx>${posts.frontmatter.description}</div></a>`;
}, "C:/xampp/htdocs/practicas-astro-js/src/components/PostVista.astro", void 0);

const $$Astro = createAstro();
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const posts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./posts/01-posts.md": () => import('./01-posts_aa29be5f.mjs'),"./posts/prueba.md": () => import('./prueba_57121b71.mjs')}), () => "./posts/*.md");
  console.log(posts);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog", "data-astro-cid-ijnerlr2": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section data-astro-cid-ijnerlr2><article data-astro-cid-ijnerlr2>${posts.map((post) => renderTemplate`${renderComponent($$result2, "PostVista", $$PostVista, { "posts": post, "data-astro-cid-ijnerlr2": true })}`)}</article></section>` })}`;
}, "C:/xampp/htdocs/practicas-astro-js/src/pages/blog.astro", void 0);

const $$file = "C:/xampp/htdocs/practicas-astro-js/src/pages/blog.astro";
const $$url = "/blog";

export { $$Blog as default, $$file as file, $$url as url };
