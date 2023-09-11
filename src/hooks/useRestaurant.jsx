import { useEffect, useState } from 'react';

export function useRestaurant(id) {
  const [restaurant, setRestaurant] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your actual API endpoint
    fetch(`http://localhost:3002/restaurants/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('🚀 ~ file: useRestaurant.jsx:12 ~ .then ~ data:', data);
        setRestaurant(data);
      })
      .catch((error) => {
        console.log(
          '🚀 ~ file: useRestaurant.jsx:16 ~ useEffect ~ error:',
          error,
        );
        setError(error);
      });
  }, [id]);

  return { restaurant, error };
}
