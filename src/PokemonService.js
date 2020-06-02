import axios from 'axios'
import { getInfo, saveInfo } from './LocalStorageServices'



export let getPokemons = () =>{
    const pokemons = getInfo("pokemons") 
    
    if(!pokemons){
        return axios.get('http://pokeapi.salestock.net/api/v2/pokemon/')
        .then(res =>{
            saveInfo("pokemons", res.result);
            return res.result     
        })
    }
    return Promise.resolve(pokemons)
    }
    

export let getPokemonInfo = (namePokemon) =>{
    const poke = getInfo(`poke-${namePokemon}`)

    if(!poke){
        return axios.get(`http://pokeapi.salestock.net/api/v2/pokemon/${namePokemon}`)
        .then(res =>{
            saveInfo(`poke-${namePokemon}`, res);
            return res     
        })
    }

    return Promise.resolve(poke)
    
}
