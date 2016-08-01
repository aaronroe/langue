import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import registration from './registration';


const rootReducer = combineReducers({
  routing: routerReducer,
  registration: registration,
});

export default rootReducer;
