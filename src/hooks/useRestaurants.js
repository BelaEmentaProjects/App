import { useSelector } from 'react-redux';
import { selectRestaurants } from '../selectors';

export const useRestaurants = () => {
  return useSelector(selectRestaurants);
};
