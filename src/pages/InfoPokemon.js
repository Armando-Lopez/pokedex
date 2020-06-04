import React, { Component } from 'react';
import PokemonService from '../PokemonService';
import DatePokemon from '../components/Infopokemon/DatePokemon'
import ProfilePokemon from '../components/Infopokemon/ProfilePokemon'
import EvolutionPokemon from '../components/Infopokemon/EvolutionPokemon'
import { Link } from 'react-router-dom';

class InfoPokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: undefined,
            loading: true,
            error: false
        }
    }

    componentDidMount() {
        this._getPokemon();
    }

    async _getPokemon() {
        const { name } = this.props.match.params

        let pokemonData = await PokemonService.getPokemonInfo(name);
        this.setState({
            pokemon: pokemonData,
            loading: false
        })
    }

    render() {
        const { pokemon, loading } = this.state;
        if (pokemon && !loading) {

            const { id, name, height, weight, types, stats } = pokemon.pokemon;

            const { front_default } = pokemon.pokemon.sprites;

            return (
                <div className="info-pokemon container-fluid">
                    <Link to="/">
                        <i className="fas fa-arrow-left" aria-hidden="true" ></i>
                    </Link>
                    
                    <div className="card-pokemon m-auto">

                        <h3 className="pokemon-name">#{id} {name}</h3>

                        <DatePokemon img={front_default} types={types} stats={stats} />

                        <ProfilePokemon height={height} weight={weight} />

                        <EvolutionPokemon pokemonName={name}/>

                    </div>
                </div >
            );
        } else {
            return (
                <div className="loading">Loading...</div>
            )
        }
    }
}

export default InfoPokemon;