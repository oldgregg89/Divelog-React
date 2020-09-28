export default (state = {}, action) => {
  const { id } = action;
  switch (action.type) {
    case 'ADD_LOCATION':
      return Object.assign({}, state, {
        [id]: {
          // fill details
        }
      })
    case 'DELETE_LOCATION':
      const newState = { ...state };
      delete newState[id];
      return newState;
    default: 
      return state; 
  }
}