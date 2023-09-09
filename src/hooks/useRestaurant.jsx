import { useEffect, useState } from 'react';

export function useRestaurant(id) {
  const [restaurant, setRestaurant] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your actual API endpoint
    fetch(`/restaurants/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setRestaurant(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [id]);

  return { restaurant, error };
}
