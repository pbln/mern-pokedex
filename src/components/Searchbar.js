import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Searchbar.css';

export default function Searchbar({ type, setType }) {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim()) {
      const s = search.toLocaleLowerCase();
      navigate(`/pokemon/${s}`);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='search-bar'>
      <input
        type='text'
        placeholder='Enter name'
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Search</button>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">All Types</option>
        <option value="normal">Normal</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="electric">Electric</option>
        <option value="grass">Grass</option>
        <option value="ice">Ice</option>
        <option value="fighting">Fighting</option>
        <option value="poison">Poison</option>
        <option value="ground">Ground</option>
        <option value="flying">Flying</option>
        <option value="psychic">Psychic</option>
        <option value="bug">Bug</option>
        <option value="rock">Rock</option>
        <option value="ghost">Ghost</option>
        <option value="dragon">Dragon</option>
        <option value="dark">Dark</option>
        <option value="steel">Steel</option>
        <option value="fairy">Fairy</option>
      </select>
    </div>
  );
}
