import { useAuthContext } from './useAuthContext'

export const useFav = ()=>{
    const { dispatch } = useAuthContext()

    const addtofav = async(user,pokemon) =>{
        try {
          const response = await fetch('https://mern-pokedex-be.onrender.com/api/user/fav/add', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({  email : user.user.email, pokemon })
          })
      
            const data = await response.json();
      
            if (!response.ok) {
              throw new Error(data.error);
            }

            else{
              localStorage.setItem('user', JSON.stringify(data))

    
             dispatch({type: 'SET_FAV', payload: data})
            }
      
            return data;
          } catch (error) {
            console.error('Error adding favorite:', error);
            throw error;
          }
    }

    const removefromfav = async(user,pokemon)=>{
        try{
          const response = await fetch('https://mern-pokedex-be.onrender.com/api/user/fav/dlt', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({  email : user.user.email, pokemon })
          })
        
              const data = await response.json();
        
              if (!response.ok) {
                throw new Error(data.error);
              }
              else{
                localStorage.setItem('user', JSON.stringify(data))

      
               dispatch({type: 'SET_FAV', payload: data})
              }
        
              return data;
    
        }catch(error){
          console.log(error)
        }
    }
    return {addtofav , removefromfav} ;   
}


