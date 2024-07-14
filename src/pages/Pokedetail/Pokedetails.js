import React, { useEffect, useState , useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Pokedetails.css';

const PokemonDetail = () => {
  
  //const [bgcolor, setbgcolor] = useState('#f8f9fa')
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokemon(response.data);
      } catch (error) {
        console.error('Error fetching Pokémon details:', error);
      }
    };

    fetchPokemonDetails();
  }, [name]);

  if (!pokemon) return <div>Loading...</div>;
  console.log(pokemon)
  return (
    <div className="pokemon-detail-container"  >
      <h1>{pokemon.name}</h1>
      <img  src={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`} alt="{pokemon.name}" />

      <p>Height: {pokemon.height / 10} m</p>
      <p>Weight: {pokemon.weight / 10} kg</p>
      <p>Abilities: {pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
      <div className="pokemon-types">
        {pokemon.types.map(type => (
          <span key={type.type.name} className={`pokemon-type pokemon-type-${type.type.name}`}>
            {type.type.name}
          </span>
        ))}
      </div>
      <p>Base Experience: {pokemon.base_experience}</p>
    </div>
  );
};

export default PokemonDetail;
