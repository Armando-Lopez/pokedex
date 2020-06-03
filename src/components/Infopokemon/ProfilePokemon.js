import React from 'react';

const ProfilePokemon = ({ height, weight, }) => {

    return (
        <div className="profile">
            <h3 className="title">Profile</h3>
            <div className="row">
                <div className="col">{height} m</div>
                <div className="col">{height} m</div>
            </div>
        </div>
    )
}

export default ProfilePokemon;