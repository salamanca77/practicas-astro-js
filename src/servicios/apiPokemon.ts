import { type APIPoke } from "../tiposDatos/api";

const url = "https://pokeapi.co/api/v2/pokemon"

export const resultPoke = async () => {
    const resultado = await fetch(url);
    const resulJson = (await resultado.json()) as APIPoke;
    const { results } = resulJson;
    
    const datos = results.map(async (result) => {
        const respuesta = await fetch(result.url);
        const pokemones = await respuesta.json();
        // console.log(pokemones);
                
        return {
            id: pokemones.id,
            image: pokemones.sprites.other.dream_world.front_default,
        };
    });
    
    const pokes = await Promise.all(datos);
    return pokes
}

