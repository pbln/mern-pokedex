import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useFav } from '../../hooks/useFavourite';
import { useAuthContext } from "../../hooks/useAuthContext";
import customPokemons from '../../customPokemon';
import './Pokedetails.css';

const PokemonDetail = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [species, setSpecies] = useState(null);
  const [evolution, setEvolution] = useState(null);
  const [isCustom, setIsCustom] = useState(false); 
  const { user } = useAuthContext();
  const { addtofav, removefromfav } = useFav();
  const [fav,setFav] = useState(false)

  const favImg = 'https://cdn-icons-png.flaticon.com/512/1077/1077035.png';
  const heartFilled = 'https://cdn-icons-png.flaticon.com/512/833/833472.png'; 

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const customPokemon = customPokemons.find(p => p.name.toLowerCase() === name.toLowerCase());
        
        if (customPokemon) {
          setPokemon(customPokemon);
          setIsCustom(true)
        } else {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
          setPokemon(response.data);
          
          const speciesResponse = await axios.get(response.data.species.url);
          setSpecies(speciesResponse.data);
          
          const evolutionResponse = await axios.get(speciesResponse.data.evolution_chain.url);
          setEvolution(evolutionResponse.data);
          setIsCustom(false); 
        }
      } catch (error) {
        console.log("No Pokémon found");
      }
    };

    fetchPokemonDetails();
   


  }, [name]);

  useEffect(() => {
    if (pokemon && pokemon.name && user && user.user && user.user.favorites) {
        const isFavorite = user.user.favorites.some(fav => fav.name.toLowerCase() === pokemon.name.toLowerCase());
        setFav(isFavorite);
        
    }
}, [user, pokemon]);

  if (isCustom && !pokemon ) return <div className='list-btn'>Loading...</div>;
  else if(!isCustom && (!pokemon || !species || !evolution)) return <div className='list-btn'>Loading...</div>;

  const handleClick = async (e) => {
    e.preventDefault();
    setFav(!fav)
    if (user) {
      setFav(!fav)
      try {
        if (fav) {
          await removefromfav(user, pokemon); 
        } else {
          await addtofav(user, pokemon); 
        }
        setFav(!fav)
      } catch (error) {
        console.error('Error toggling favorite:', error);
      }
    }
  };
 
  return (
    <div className="pokemon-detail-container">
      <div className="pokemon-left-info">
        <h1>{pokemon.name}</h1>
        <img 
          src={isCustom ? pokemon.customImage : `https://img.pokemondb.net/artwork/${pokemon.name}.jpg`} 
          alt={pokemon.name} 
          className="left-poke" 
        />
        <img 
          src={fav ? heartFilled : favImg} // Toggle image based on favorite status
          className="fav" 
          alt="My favs" 
          onClick={handleClick} // Attach click handler
        />
        <div className="pokemon-stats">
          <p><span className="label">Height:</span> {pokemon.height / 10} m</p>
          <p><span className="label">Weight:</span> {pokemon.weight / 10} kg</p>
        </div>
        <div className="pokemon-types">
          {isCustom 
            ? pokemon.types.map((type, index) => (
                <span key={index} className={`pokemon-type pokemon-type-${type.toLowerCase()}`}>
                  {type}
                </span>
              ))
            : pokemon.types.map((type) => (
                <span key={type.type.name} className={`pokemon-type pokemon-type-${type.type.name.toLowerCase()}`}>
                  {type.type.name}
                </span>
              ))
          }
        </div>
        
      </div>
      
      <div className="pokemon-right-info">
        <div className="pokemon-about">
          <h3>About</h3>
          <p className='abt'>{isCustom ?
          pokemon.abt : species.flavor_text_entries.find(entry => entry.language.name === 'en')?.flavor_text}</p>
        </div>
        <div className="pokemon-abilities">
          <h3>Abilities</h3>
          <p>
            {isCustom 
              ? pokemon.abilities.map((ability, index) => (
                  <span key={index} className="pokemon-ability">
                    • {ability}
                  </span>
                ))
              : pokemon.abilities.map((ability, index) => (
                <span key={index} className="pokemon-ability">
                  • {ability.ability.name}  
                </span>
                ))
            }
          </p>
        </div>
        <div className="pokemon-evolution">
          <h3>Evolution Chain</h3>
          {!isCustom && evolution.chain && renderEvolutionChain(evolution.chain)}
          {isCustom && pokemon.evolution && renderEv(pokemon.evolution)}
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

const renderEv = (chain)=>{
return (
  <div className="evolution-list">
      {chain.map((evolution, index) => (
        <div key={index} className="evolution-item">
          <div className="evolution-details">
            <img
              src={evolution.image}
              alt={evolution}
              className="evolution-image"
            />
            <span className="evolution-name">{evolution.name}</span>
          </div>
          {index < chain.length - 1 && (
            <span className="evolution-arrow">→</span>
          )}
        </div>
      ))}
    </div>
)
}

export default PokemonDetail;
