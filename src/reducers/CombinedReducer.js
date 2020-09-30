import LocationListReducer from './LocationListReducer';
import LogListReducer from './LogListReducer';
import FormVisibleReducer from './FormVisibleReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  LogList: LogListReducer,
  FormSwitch: FormVisibleReducer,
  LocationList: LocationListReducer,
  firestore: firestoreReducer
});

export default rootReducer