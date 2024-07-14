import { createContext, useReducer , useEffect } from 'react'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload }
    case 'LOGOUT':
      return { user: null }
    case 'SET_LOADING':
        return { ...state, loading: true };
    case 'STOP_LOADING':
        return { ...state, loading: false };
    case 'SET_FAV':
        return { user : action.payload}
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { 
    user: null , loading:true
  })

  useEffect(()=>{
    const checkUser = async () => {
      dispatch({ type: 'SET_LOADING' });
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser) {
        dispatch({ type: 'LOGIN', payload: storedUser });
      } else {
        dispatch({ type: 'STOP_LOADING' });
      }
    };
    checkUser();
  },[])


  console.log('AuthContext state:', state)
  
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AuthContext.Provider>
  )

}