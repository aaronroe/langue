import React from 'react';


export default class LangueApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let msg;
    if (window.langue_api_token) {
      msg = <h1>You're signed in.</h1>;
    } else {
      msg = <h1>You're not signed in.</h1>;
    }

    return msg;
  }
}
