import React, { useEffect, useState }  from 'react';
import PokemonService from '../PokemonService'

const CardPokemon = ({photo, name, id, type}) => {
    const [poke, setPoke] = useState(undefined);

    useEffect(() => {
        PokemonService.getPokemonInfo(name).then((res) => {
            setPoke(res);
    
    }) }, []);
    
    if (poke) {
        console.log('pokemon: ', poke)
        console.log('tipo: ', poke.types[0].type.name)
        console.log('url: ', poke.sprites.front_default)
    
        return (
            <div className="cardPokemon">
                <div className="imgPokemon">
                    <img src={poke.sprites.front_default} alt={name}/>
                </div>
                <div className="card-body">
                    <div className="card-text text-center">
                        # {poke.id} 
                        <h5> {name}</h5>
                        <p>Type: {poke.types.map(t => t.type.name).join(', ')}</p>
                                               
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div>Cargando...</div>
        )
    }   
        
}
 
export default CardPokemon;