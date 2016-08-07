import React from 'react';
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
      <div className="container">

        <header className="header">
          <nav role="navigation" className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              <div className="navbar-header">
                <Link className="navbar-brand" to="/">Langue</Link>
              </div>
              <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/register">Register</Link></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <main role="main">
          <div className="container">
            {msg}
            {this.props.children}
          </div>
        </main>

      </div>
    );
  }
}
