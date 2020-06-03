import React, { Component } from 'react';
import PokemonService from '../PokemonService';
import DatePokemon from '../components/Infopokemon/DatePokemon'
import ProfilePokemon from '../components/Infopokemon/ProfilePokemon'

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

            const { id, name, height, weight, types, stats } = pokemon;
            console.log(pokemon);

            const { front_default } = pokemon.sprites;

            return (
                <div className="info-pokemon container-fluid">
                    <div className="card-pokemon m-auto">

                        <h3 className="pokemon-name">#{id} {name}</h3>

                        <DatePokemon img={front_default} types={types} stats={stats} />

                        <ProfilePokemon height={height} weight={weight} />
                        <li className="list-group-item">Evolutions</li>

                    </div>
                </div >
            );
        } else {
            return (
                <h1>Cargando</h1>
            )
        }
    }
}

export default InfoPokemon;