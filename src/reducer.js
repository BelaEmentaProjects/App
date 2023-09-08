const initialState = {
  restaurants: [],
  // ... define initial values for other state properties here
};

export function restaurantReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_RESTAURANTS':
      return {
        ...state,
        restaurants: action.payload,
      };
    default:
      return state;
  }
}
