import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router';


export default function NavigationBar(props) {
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
                <li className={classNames({hidden: window.langue_api_token})}>
                  <Link to="/login">Login</Link>
                </li>
                <li className={classNames({hidden: window.langue_api_token})}>
                  <Link to="/register">Register</Link>
                </li>
                <li className={classNames({hidden: !window.langue_api_token})}>
                  <a href="/logout">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main role="main">
        <div className="container">
          {props.children}
        </div>
      </main>
    </div>
  );
};
