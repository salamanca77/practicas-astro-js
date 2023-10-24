import { f as createAstro, e as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent } from '../astro_4c712df1.mjs';
import 'clsx';
/* empty css                                       */import { $ as $$Layout } from './_id__6991b5bb.mjs';
import 'html-escaper';
/* empty css                            *//* empty css                          */
const $$Astro$1 = createAstro();
const $$RespuestaItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RespuestaItem;
  const { datos } = Astro2.props;
  console.log(datos);
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-avr5g6va><h3 data-astro-cid-avr5g6va>${datos.pregunta}</h3><p data-astro-cid-avr5g6va>${datos.respuesta}</p></div>`;
}, "C:/xampp/htdocs/practicas-astro-js/src/components/RespuestaItem.astro", void 0);

const pR = [
  {
    pregunta: "Pregunta uno",
    respuesta: "Respuesta uno"
  },
  {
    pregunta: "Pregunta dos",
    respuesta: "Respuesta dos"
  },
  {
    pregunta: "Pregunta tres",
    respuesta: "Respuesta tres"
  },
  {
    pregunta: "Pregunta cuatro",
    respuesta: "Respuesta cuatro"
  },
  {
    pregunta: "Pregunta cinco",
    respuesta: "Respuesta cinco"
  }
];

const $$Astro = createAstro();
const $$PreguntaRespuesta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PreguntaRespuesta;
  console.log(pR);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Preguntas", "data-astro-cid-w7jdgjlm": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section data-astro-cid-w7jdgjlm><article data-astro-cid-w7jdgjlm>${pR.map((dato) => {
    return renderTemplate`${renderComponent($$result2, "RespuestaItem", $$RespuestaItem, { "datos": dato, "data-astro-cid-w7jdgjlm": true })}`;
  })}</article></section>` })}`;
}, "C:/xampp/htdocs/practicas-astro-js/src/pages/preguntaRespuesta.astro", void 0);

const $$file = "C:/xampp/htdocs/practicas-astro-js/src/pages/preguntaRespuesta.astro";
const $$url = "/preguntaRespuesta";

export { $$PreguntaRespuesta as default, $$file as file, $$url as url };
