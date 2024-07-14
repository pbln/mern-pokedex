import { useState } from 'react'
//import axios from 'axios';
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const signup = async ( email, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/user/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({  email, password })
    })
    const json = await response.json()
    console.log(response)

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      
     // console.log(JSON.stringify(json))
      localStorage.setItem('user', JSON.stringify(json))

      
      dispatch({type: 'LOGIN', payload: json})

      
      setIsLoading(false)
    }
  }

  return { signup, isLoading, error }
}