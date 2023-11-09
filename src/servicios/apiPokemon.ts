import { type APIPoke } from "../tiposDatos/api";

export const resultPoke = async () => {
    const resultado = await fetch("https://pokeapi.co/api/v2/pokemon");
    const resulJson = (await resultado.json()) as APIPoke;
    const { results } = resulJson;

    const datos = results.map(async (result) => {
        const respuesta = await fetch(result.url);
        const pokemones = await respuesta.json();
        return {
            id: pokemones.id,
            image: pokemones.sprites.other.dream_world.front_default,
        };
    });

    const pokes = await Promise.all(datos);
    return pokes
}