export default (state = {}, action) => {
  const { id } = action;
  switch (action.type) {
    case 'ADD_LOG':
      return Object.assign({}, state, {
        [id]: {
          // fill details
        }
      })
    case 'DELETE_LOG':
      const newState = { ...state };
      delete newState[id];
      return newState;
    default: 
      return state; 
  }
}