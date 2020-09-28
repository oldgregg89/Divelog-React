import LocationListReducer from './LocationListReducer';
import LogListReducer from './LogListReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  LogList: LogListReducer,
  LocationList: LocationListReducer
});

export default rootReducer