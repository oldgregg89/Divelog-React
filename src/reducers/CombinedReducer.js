import LocationListReducer from './LocationListReducer';
import LogListReducer from './LogListReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  LogList: LogListReducer,
  LocationList: LocationListReducer,
  firestore: firestoreReducer
});

export default rootReducer