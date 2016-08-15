import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import registration from './registration';
import login from './login';
import sessionWizard from './sessionWizard';


const rootReducer = combineReducers({
  routing: routerReducer,
  registration: registration,
  login: login,
  sessionWizard: sessionWizard,
});

export default rootReducer;
