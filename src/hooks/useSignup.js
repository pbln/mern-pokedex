import { useState } from 'react';
import axios from 'axios';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post('https://mern-pokedex-be.onrender.com/api/user/signup', { email, password });

      if (!response.ok) {
        const json = await response.json();
        setError(json.error || 'Signup failed.');
      } else {
        const json = await response.json();
        localStorage.setItem('user', JSON.stringify(json));
        dispatch({ type: 'LOGIN', payload: json });
      }
    } catch (error) {
      setError('Failed to connect to the server.');
    } finally {
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
