import React from 'react';

const ProfilePokemon = ({ height, weight }) => {
  return (
    <div className="profile">
      {/* <h3 className="title">Profile</h3> */}
      <div className="row text-center">
        <div className="col title">Height: {height} </div>
        <div className="col title">Weight: {weight} </div>
      </div>
    </div>
  );
};

export default ProfilePokemon;
