export function reducer(state = [], action) {
  switch (action.type) {
    case 'GET_RESTAURANTS':
      return {
        restaurants: [...action.payload],
      };

    default:
      return state;
  }
}
