import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import rootReducer from './reducers'


export default function configuredStore(initialState) {
  let createStoreWithMiddleware;

  if (process.env.NODE_ENV === 'dev') {
    let logger = createLogger();
    createStoreWithMiddleware = applyMiddleware(thunk, promise, logger)(createStore);
  } else {
    createStoreWithMiddleware = applyMiddleware(thunk, promise)(createStore);
  }

  return createStoreWithMiddleware(rootReducer, initialState);
}
