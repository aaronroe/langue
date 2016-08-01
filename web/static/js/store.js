import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from './reducers'


export default function configuredStore(initialState) {
  let createStoreWithMiddleware;

  // if (process.env.NODE_ENV === 'dev') {
  let logger = createLogger();
  let router = routerMiddleware(browserHistory);
  createStoreWithMiddleware = applyMiddleware(thunk, promise, logger, router)(createStore);
  // } else {
    // createStoreWithMiddleware = applyMiddleware(thunk, promise)(createStore);
  // }

  return createStoreWithMiddleware(rootReducer, initialState);
}
