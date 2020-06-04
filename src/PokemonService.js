import axios from 'axios';
import { getInfo, saveInfo } from './LocalStorageServices';

let getPokemons = () => {
  const pokemons = getInfo('pokemons');

  if (!pokemons) {
    return axios
      .get('https://pokeapi.co/api/v2/pokemon/?limit=25')
      .then((res) => {
        saveInfo('pokemons', res.data.results);
        return res.data.results;
      });
  }
  return Promise.resolve(pokemons);
};

let getPokemonInfo = async (namePokemon) => {
  let poke = getInfo(`poke-${namePokemon}`);

  if (!poke) {
    const pokeData = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${namePokemon}`
    );
    const specieData = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${pokeData.data.id}`
    );
    const evolData = await axios.get(specieData.data.evolution_chain.url);
    poke = {
      pokemon: pokeData.data,
      specie: specieData.data,
      evolution: evolData.data,
    };
    saveInfo(`poke-${namePokemon}`, poke);
  }

  return Promise.resolve(poke);
};

export default { getPokemons, getPokemonInfo };
