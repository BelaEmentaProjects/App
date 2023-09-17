import { useEffect, useState } from 'react';

export function useRestaurantDetails(id) {
  const [restaurant, setRestaurant] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your actual API endpoint
    fetch(`http://localhost:3002/restaurant/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(
          '🚀 ~ file: useRestaurantDetails.jsx:12 ~ .then ~ data:',
          data,
        );
        setRestaurant(data);
      })
      .catch((error) => {
        console.log(
          '🚀 ~ file: useRestaurantDetails.jsx:16 ~ useEffect ~ error:',
          error,
        );
        setError(error);
      });
  }, [id]);

  return { restaurant, error };
}
