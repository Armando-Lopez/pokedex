import React, { Component } from 'react';
import PokemonService from '../PokemonService';
import DatePokemon from '../components/Infopokemon/DatePokemon'
import ProfilePokemon from '../components/Infopokemon/ProfilePokemon'

const Name = ({ name }) => (
    <div className="row">
        <div className="col-12">
            <h5 className="card-title">{name.toUpperCase()}</h5>
        </div>
    </div>
);


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

            const { name, height, weight, types, stats } = pokemon;
            console.log(pokemon);

            const { front_default } = pokemon.sprites;

            return (
                <article className="container-fluid">
                    <div className="card" style={{ width: "25rem" }}>
                        <Name name={name} />
                        <DatePokemon img={front_default} types={types} stats={stats} />

                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <ProfilePokemon height={height} weight={weight} />
                            </li>
                            <li className="list-group-item">Profile</li>
                            <li className="list-group-item">Evolutions</li>
                        </ul>
                        <div className="card-body">
                        </div>
                    </div>
                </article >
            );
        } else {
            return (
                <h1>Cargando</h1>
            )
        }
    }
}

export default InfoPokemon;