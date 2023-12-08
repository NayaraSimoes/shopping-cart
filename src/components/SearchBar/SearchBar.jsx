import React from 'react';
import { CiSearch } from 'react-icons/ci';

function SearchBar() {
  return (
    <form>
      <input type="search" 
        placeholder="Buscar produtos" 
        className="search__input"
        required
      />

      <button type="submit" className="search__button">
        <CiSearch />
      </button>
    </form>
  );
}

export default SearchBar;

