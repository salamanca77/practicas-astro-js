import {type APIResult}  from '../tiposDatos/api'

export const idconeccion  = async ({id}: {id:string})=>{
    const resultado1 = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const results = (await resultado1.json()) as APIResult 
    return results
}

export  const apiconeccion = async ()=>{
    const resultado = await fetch('https://rickandmortyapi.com/api/character')
    const {results} = (await resultado.json())
    // console.log(results);
    return results
}
  

export const apipokemon = async ()=>{
    const resultado1 = await fetch('https://rickandmortyapi.com/api/character')
    console.log(resultado1);
}