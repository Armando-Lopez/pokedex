import React, { useState, useEffect } from 'react';
import PokemonService from '../../PokemonService';

const EvolutionPokemon = ({ pokemonName }) => {
  const [preEvolution, setPreEvolution] = useState('none');
  const [nextEvolution, setNextEvolution] = useState('none');

  useEffect(() => {
    PokemonService.getPokemonInfo(pokemonName).then((pokemon) => {
      const preEvol = pokemon.specie.evolves_from_species;
      const nextEvol =
        pokemon.evolution.chain.evolves_to[0].evolves_to[0].species;

      if (preEvol) setPreEvolution(preEvol.name);

      if (nextEvol.name !== pokemonName) setNextEvolution(nextEvol.name);
    });
  });

  if (preEvolution && nextEvolution) {
    return (
      <div className="evolutions text-center">
        <h4 className="evolutions-title mt-2">Evolutions</h4>
        <div className="text-center d-flex flex-column align-items-center">
          {preEvolution !== 'none' ? (
            <p>
              Evoluciona de{' '}
              <span className="next-prev-evolution badge badge-pill">
                {preEvolution}
              </span>
            </p>
          ) : null}

          {nextEvolution !== 'none' ? (
            <p>
              Evoluciona a{' '}
              <span className="next-prev-evolution badge badge-pill">
                {nextEvolution}
              </span>
            </p>
          ) : null}
        </div>
      </div>
    );
  } else {
    return <h3>Loading or not data found</h3>;
  }
};

export default EvolutionPokemon;
