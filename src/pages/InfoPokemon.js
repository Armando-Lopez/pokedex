import React, { Component } from 'react';
class InfoPokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <article className="bg-primary">
                <div className="row">
                    <div className="card mx-auto mt-5">
                        <img className="card-img-top" src="https://fotos01.lne.es/2016/07/27/318x200/trucos-disfrutar-1.jpg" alt="Pokemon" />
                        <div className="card-body">
                            <h5 className="card-title">Pokemon Name</h5>
                            <p className="card-text">pokemon info</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Date</li>
                            <li className="list-group-item">Profile</li>
                            <li className="list-group-item">Evolutions</li>
                        </ul>
                        <div className="card-body">
                        </div>
                    </div>
                </div>
            </article >
        );
    }
}

export default InfoPokemon;