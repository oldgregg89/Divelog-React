export default (state = {}, action) => {
  const { id, location, date, time, time2, time3, time4, depth, depth2, depth3, depth4, notes } = action;

  switch (action.type) {
    case 'ADD_LOG':
      return Object.assign({}, state, {
        [id]: {
          id: id,
          location: location,
          date: date,
          time: time,
          time2: time2,
          time3: time3,
          time4: time4,
          depth: depth,
          depth2: depth2,
          depth3: depth3,
          depth4: depth4,
          notes: notes
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