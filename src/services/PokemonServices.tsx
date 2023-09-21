import axios from "axios"

export const getPokemonsService=()=>{
    return axios({
        url:'https://pokeapi.co/api/v2/pokemon?limit=20&offset=20',
        method:'GET'
    })
}


export const getPokemonDetailService=(name:string)=>{
    return axios({
        url:`https://pokeapi.co/api/v2/pokemon/${name}`,
        method:'GET'
    })
}


export const getPokemonNexteService=(url:string)=>{
    return axios({
        url,
        method:'GET'
    })
}