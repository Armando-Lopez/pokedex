import React, { useEffect, useState } from 'react';
import SearchPokemons from '../components/SearchPokemons';
import Container from '../components/ContainerPokemon';
import PokemonService from '../PokemonService'

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  
  const [search, setSearch] = useState("");

    useEffect(() => {
        PokemonService.getPokemons().then((res) => {
        setPokemons (res.filter(e => e.name.includes(search)))
        })
    }, [search]);

  return ( 

    <div className="App">
      <SearchPokemons pokemons={pokemons} onSearch={setSearch}/>
      <Container pokemons={pokemons}/>
    </div>
  );
}
 
export default App;