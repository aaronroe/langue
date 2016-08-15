import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router';


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

    return (
      <div>
        {msg}
        <Link to="/new-session"><Button bsStyle="primary"><Glyphicon glyph="comment" /> New Chat Session</Button></Link>
      </div>
    );
  }
}
