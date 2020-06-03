import React, { useEffect, useState } from 'react';
import Cardpokemon from './CardPokemon'
import PokemonService from '../PokemonService'

const Container = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        PokemonService.getPokemons().then((res) => {
            setPokemons(res);
        })
    }, []);

    if (pokemons.length) {
        // console.log('pokemons: ', pokemons);
        // console.log('pokemon posicion 0: ', pokemons[0]);
        // console.log('nombre pokemon: ',pokemons[0].name);

        return (

            <>

                <div className="row">
                    {pokemons.map(p => <Cardpokemon key={p.name} name={p.name} />)}
                </div>


            </>

        );
    } else {
        return (
            <div>Cargando</div>
        )
    }
}


export default Container;