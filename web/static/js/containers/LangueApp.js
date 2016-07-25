import React from 'react';

import AuthenticationApp from './AuthenticationApp';


export default class LangueApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (window.langue_api_token) {
      return (
        <h1>You're signed in.</h1>
      );
    } else {
      return (
        <AuthenticationApp />
      );
    }
  }
}
