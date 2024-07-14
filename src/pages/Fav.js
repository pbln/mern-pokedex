import React from 'react'
import Pokecard from './Pokecard/PokeCard';
import { useAuthContext } from '../hooks/useAuthContext';

export default function Fav() {
    const {user} = useAuthContext() ;
    
    const pokemons = user.user.favorites

    return(
       <>
       <ul className='pokemon-list'>
                {pokemons.map((pokemon, index) => (
                    <Pokecard pokemon={pokemon} key={index} />
                ))}
            </ul>
       
       </> 
    )
}
