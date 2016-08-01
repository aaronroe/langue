import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import registration from './registration';
import login from './login';


const rootReducer = combineReducers({
  routing: routerReducer,
  registration: registration,
  login: login,
});

export default rootReducer;
