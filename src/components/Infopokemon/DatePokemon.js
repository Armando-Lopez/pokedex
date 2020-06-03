import React from 'react';


const DatePokemon = ({ img, types, stats }) => {
    return (
        <div className="datePokemon">
            <img className="img d-block m-auto" src={img} alt="Pokemon" />
            <div className="mb-3 types text-center">
                {types.map(type => {
                    return (
                        <div key={type.type.name} className="btn ml-1 text-center bg-dark type">
                            {type.type.name}
                        </div>
                    )
                })}
            </div>
            <ul className="list-group text-center m-auto stats">
                {stats.reverse().map((stat, index) => {
                    return (
                        <li key={index} className="d-flex justify-content-between align-items-center stat">
                            <b>{stat.stat.name}: </b>
                            <span className="badge badge-pill">
                                {stat.base_stat}
                            </span>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}
export default DatePokemon;