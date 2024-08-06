import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Pokecard.css';
import {useFav} from '../../hooks/useFavourite' ;
import { useAuthContext } from "../../hooks/useAuthContext";

const Pokecard = ({ pokemon }) => {
   const [fav, setFav] = useState(false)
   const { user } = useAuthContext(); 
   const { addtofav , removefromfav } = useFav() ;

   useEffect(() => {
    if (user && user.user && user.user.favorites) {
        const isFavorite = user.user.favorites.some(fav => fav.name.toLowerCase() === pokemon.name.toLowerCase());
        setFav(isFavorite);
    }
}, [user, pokemon]);

  
  async function handleClick(e){
      
    e.preventDefault()
    
    if(user){
      try {
        if (fav) {
          await removefromfav( user,pokemon);
        } else {
          await addtofav(user,pokemon);
        }
        setFav(!fav);
      } catch (error) {
        console.error('Error toggling favorite:', error);
      }
        
    }

    }

    

  return (
    <Link to={`/pokemon/${pokemon.name}`} className="pokecard">
      <li>
        <div className="pokemon-name">{pokemon.name}</div>
        <img className="pokemon-image" src={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`} alt={pokemon.name} />
        <p className="pokemon-abilities">Abilities: {pokemon.abilities.join(', ')}</p>
        <p className="pokemon-types">
          {pokemon.types.map(type => (
            <span key={type} className={`pokemon-type pokemon-type-${type.toLowerCase()}`}>
              {type}
            </span>
          ))}
        </p>
        {
          user &&
          <button className="save-button" onClick={handleClick}>
          { fav ? 'Remove fav':'Add fav'}
        </button>
        }
      </li>
    </Link>
  );
};

export default Pokecard;
