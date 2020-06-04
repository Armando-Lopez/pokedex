import React, { useEffect, useState } from 'react';
import PokemonService from '../PokemonService';
import { Link } from 'react-router-dom';

const CardPokemon = ({ name }) => {
  const [poke, setPoke] = useState(undefined);
  const [specie, setSpecie] = useState(undefined);
  const [pokEvolution, setPokEvolution] = useState(undefined);

  useEffect(() => {
    PokemonService.getPokemonInfo(name).then((poke) => {
      setPoke(poke.pokemon);
      setSpecie(poke.specie);
      setPokEvolution(poke.evolution);
    });
  }, [name]);

  if (poke && pokEvolution) {
    return (
      <Link to={`infopokemon/${name}`}>
        <div className="cardPokemon">
          <div className="imgPokemon">
            <img src={poke.sprites.front_default} alt={name} />
          </div>
          <div className="card-body">
            <div className="card-text text-center">
              <p className="id">
                Id: {poke.id} / {poke.types.map((t) => t.type.name).join(', ')}
              </p>
              <h5> {name}</h5>
              <p>
                Evolución de:
                <small>
                  {specie.evolves_from_species
                    ? specie.evolves_from_species.name
                    : '--♥--'}
                </small>
              </p>
            </div>
          </div>
        </div>
      </Link>
    );
  } else {
    return <div></div>;
  }
};

export default CardPokemon;
