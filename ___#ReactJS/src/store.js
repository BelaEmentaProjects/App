import { createStore } from 'redux';
import { restaurantReducer } from './reducer';

const initialState = {
  restaurants: [],
};

export const store = createStore(restaurantReducer, initialState);

export function updateRestaurants(data) {
  return {
    type: 'UPDATE_RESTAURANTS',
    payload: data,
  };
}
