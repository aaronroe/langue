// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import 'phoenix_html';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".
import configuredStore from './store.js';
import LangueApp from './containers/LangueApp';
import RegistrationApp from './containers/RegistrationApp';
import LoginApp from './containers/LoginApp';

// import socket from "./socket"

const store = configuredStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={LangueApp}>
        <Route path="/register" component={RegistrationApp} />
        <Route path="/login" component={LoginApp} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('langue')
);
