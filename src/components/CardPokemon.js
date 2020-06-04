import React, { useEffect, useState }  from 'react';
import PokemonService from '../PokemonService'
import { Link } from 'react-router-dom';


const CardPokemon = ({ name}) => {
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
        console.log('pokEvolution: ',pokEvolution.chain.evolves_to[0].species.name);
        
            
        return (
            <Link to={`infopokemon/${name}`}>
                <div className="cardPokemon">
                    <div className="imgPokemon">
                        <img src={poke.sprites.front_default} alt={name}/>
                    </div>
                    <div className="card-body">
                        <div className="card-text text-center">
                            <p className="id">Id: {poke.id} </p>
                            <h5> {name}</h5>
                            <p>{poke.types.map(t => t.type.name).join(', ')}</p>
                            <p>Evoluciona a: {pokEvolution.chain.evolves_to[0].species.name}</p>
                                                
                        </div>
                    </div>
                </div>
            </Link>
        )
    }else{
        return(
            <div></div>
        )
    }   
        
}
 
export default CardPokemon;