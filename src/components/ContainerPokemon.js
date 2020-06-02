import React from 'react';
import Cardpokemon from './CardPokemon'
import PokemonService from '../PokemonService'

const Container = () => {
    PokemonService.getPokemons().then(console.log);
    return ( 
        <>
        <div className="row">
            <Cardpokemon/>
            <Cardpokemon/>
            <Cardpokemon/>
            <Cardpokemon/>
            <Cardpokemon/>
        </div>
        <div className="row">
            <Cardpokemon/>
            <Cardpokemon/>
            <Cardpokemon/>
            <Cardpokemon/>
            <Cardpokemon/>
        </div>
        <div className="row">
            <Cardpokemon/>
            <Cardpokemon/>
            <Cardpokemon/>
            <Cardpokemon/>
            <Cardpokemon/>
        </div>
            
        </>
    );
}
 
export default Container;