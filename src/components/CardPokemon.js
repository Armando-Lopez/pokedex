import React, { useEffect, useState }  from 'react';
import PokemonService from '../PokemonService'
import { Link } from 'react-router-dom';


const CardPokemon = ({ name,}) => {
    const [poke, setPoke] = useState(undefined);

    useEffect(() => {
        PokemonService.getPokemonInfo(name).then((res) => {
            setPoke(res);
    
    }) }, []);
    
    if (poke) {
            
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