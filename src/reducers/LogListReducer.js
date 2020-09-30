import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { id, location, date, time, time2, time3, time4, depth, depth2, depth3, depth4, notes } = action;

  switch (action.type) {
    case c.ADD_DIVELOG:
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
    case c.DELETE_DIVELOG:
      const newState = { ...state };
      delete newState[id];
      return newState;
    default: 
      return state; 
  }
}