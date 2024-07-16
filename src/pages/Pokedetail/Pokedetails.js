import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Pokedetails.css';

const PokemonDetail = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [species, setSpecies] = useState(null);
  const [evolution, setEvolution] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokemon(response.data);
        
        const speciesResponse = await axios.get(response.data.species.url);
        setSpecies(speciesResponse.data);
        
        const evolutionResponse = await axios.get(speciesResponse.data.evolution_chain.url);
        setEvolution(evolutionResponse.data);
      } catch (error) {
        console.error('Error fetching Pokémon details:', error);
      }
    };

    fetchPokemonDetails();
  }, [name]);

  if (!pokemon || !species || !evolution) return <div>Loading...</div>;

  return (
    <div className="pokemon-detail-container">
      <div className="pokemon-left-info">
        <h1>{pokemon.name}</h1>
        <img src={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`} alt={pokemon.name} />
        <p>Height: {pokemon.height / 10} m</p>
        <p>Weight: {pokemon.weight / 10} kg</p>
        <div className="pokemon-types">
          {pokemon.types.map(type => (
            <span key={type.type.name} className={`pokemon-type pokemon-type-${type.type.name}`}>
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
      
      <div className="pokemon-right-info">
        <div className="pokemon-about">
          <h3>About</h3>
          <p className='abt'> {species.flavor_text_entries.find(entry => entry.language.name === 'en').flavor_text}</p>
        </div>
        <div className="pokemon-abilities">
        <h3>Abilities</h3>
        <p>
          {pokemon.abilities.map((ability, index) => (
            <span key={index} className="pokemon-ability">
              • {ability.ability.name}  
            </span>
          ))}
        </p>
      </div>
        <div className="pokemon-evolution">
          <h3>Evolution Chain</h3>
          {evolution.chain && renderEvolutionChain(evolution.chain)}
        </div>
      </div>
    </div>
  );
};

const renderEvolutionChain = (chain) => {
  const evolutionChain = [];
  let current = chain;

  while (current) {
    evolutionChain.push(current.species.name);
    current = current.evolves_to[0];
  }
  return (
    <div className="evolution-list">
    {evolutionChain.map((evolution, index) => (
      <div key={index} className="evolution-item">
        <div className="evolution-details">
          <img
            src={`https://img.pokemondb.net/artwork/${evolution}.jpg`}
            alt={evolution}
            className="evolution-image"
          />
          <span className="evolution-name">{evolution}</span>
        </div>
        {index < evolutionChain.length - 1 && (
        <span className="evolution-arrow">→</span>
        )}
      </div>
    ))}
  </div>
  );
};

export default PokemonDetail;
