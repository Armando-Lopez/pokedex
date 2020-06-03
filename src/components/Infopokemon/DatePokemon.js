import React from 'react';


const DatePokemon = ({ img, types, stats }) => {
    return (
        <div className="row">
            <div className="col-12">
                <img className="card-img-top " src={img} alt="Pokemon" />
            </div>
            <div className="col-12">
                <div className="row types">
                    {types.map(type => {
                        return (
                            <div key={type.type.name} className="col btn ml-1 text-center bg-dark text-white">
                                {type.type.name}
                            </div>)
                    })}
                </div>
                <div className="stats">
                    {stats.reverse().map((stat, index) => {
                        return (
                            <p key={index}>
                                <b>{stat.stat.name}: </b>
                                {stat.base_stat}
                            </p>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
export default DatePokemon;