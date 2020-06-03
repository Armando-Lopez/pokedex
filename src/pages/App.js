import React, { useEffect, useState } from 'react';
import SearchPokemons from '../components/SearchPokemons';
import Container from '../components/ContainerPokemon';
import PokemonService from '../PokemonService'
import pokelogo from '../images/Pokemon.png';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  
  const [search, setSearch] = useState("");

    useEffect(() => {
        PokemonService.getPokemons().then((res) => {
        setPokemons (res.filter(e => e.name.includes(search)).slice(0, 25))
        })
    }, [search]);

  return ( 

    <div className="App">
      <img id="pokelogo" src={pokelogo} alt="img-pokemon"/>
      <SearchPokemons pokemons={pokemons} onSearch={setSearch}/>
      <Container pokemons={pokemons}/>
    </div>
  );
}
 
export default App;