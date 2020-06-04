import React from 'react';

const SearchPokemon = ({ onSearch }) => {
  return (
    <div>
      <form className="form-inline d-flex justify-content-center md-form form-sm active-purple active-purple-2 mt-2">
        <i className="fas fa-search" aria-hidden="true"></i>
        <input
          className="form-control form-control-sm ml-3 w-75"
          type="text"
          placeholder="Search Pokemon"
          aria-label="Search"
          onChange={(e) => onSearch(e.target.value.toLowerCase())}
        />
      </form>
    </div>
  );
};

export default SearchPokemon;
