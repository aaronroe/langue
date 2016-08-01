import React from 'react';


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
        <h1>You're not signed in.</h1>
      );
    }
  }
}
