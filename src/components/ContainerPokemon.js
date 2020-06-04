import React from 'react';
import Cardpokemon from './CardPokemon';

const Container = ({ pokemons }) => {
  if (pokemons.length) {
    return (
      <>
        <div id="containerCardsPokemon" className="row">
          {pokemons.map((p) => (
            <Cardpokemon key={p.name} name={p.name} />
          ))}
        </div>
      </>
    );
  } else {
    return <div className="loading">Loading...</div>;
  }
};

export default Container;
