import React from 'react';

const CardPokemon = ({photo, name, id, type}) => {
    return (
        <div className="cardPokemon">
            <img src="https://i.pinimg.com/originals/f5/1d/08/f51d08be05919290355ac004cdd5c2d6.png" className="card-img-top" alt="pokemon"/>
            <div className="card-body">
                <p className="card-text">
                    {name} <br/>
                    {id}   <br/>
                    {type} <br/>
                </p>
            </div>
        </div>
        
)}
 
export default CardPokemon;