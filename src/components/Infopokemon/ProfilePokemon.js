import React from 'react';

const ProfilePokemon = ({ height, weight, }) => {

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th colSpan="2">Profile</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Height</td>
                        <td>{height} m</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ProfilePokemon;