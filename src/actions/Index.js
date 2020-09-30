import * as c from './ActionTypes';

export const addLog = (diveLog) => {
  const { id, location, date, time, time2, time3, time4, depth, depth2, depth3, depth4, notes } = diveLog
  return {
    type: c.ADD_DIVELOG,
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
}

export const deleteDiveLog = id => ({
  type: c.DELETE_DIVELOG,
  id
})

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});
