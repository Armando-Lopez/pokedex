import axios from 'axios'
import { getInfo, saveInfo } from './LocalStorageServices'



let getPokemons = () =>{
    const pokemons = getInfo("pokemons") 
    
    if(!pokemons){
        return axios.get('http://pokeapi.salestock.net/api/v2/pokemon/')
        .then(res =>{
            saveInfo("pokemons", res.data.results);
            return res.data.results    
        })
    }
    return Promise.resolve(pokemons)
    }
    

let getPokemonInfo = (namePokemon) =>{
    const poke = getInfo(`poke-${namePokemon}`)

    if(!poke){
        return axios.get(`http://pokeapi.salestock.net/api/v2/pokemon/${namePokemon}`)
        .then(res => {
            saveInfo(`poke-${namePokemon}`, res.data);
            return res.data     
        })
    }

    return Promise.resolve(poke)
    
}

export default {getPokemons,getPokemonInfo}
