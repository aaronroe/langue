import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as AuthenticationActionCreators from '../actions/authentication';


const defaultState = {
  email: '',
  password: '',
  passwordConfirmation: '',
};

class AuthenticationApp extends React.Component {
  constructor(props) {
    super(props);

    this.loginCallback = this.loginCallback.bind(this);
    this.registerCallback = this.registerCallback.bind(this);

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordConfirmationChange = this.handlePasswordConfirmationChange.bind(this);

    this.state = defaultState;
  }

  loginCallback(event) {
    alert('Login Performed');
  }

  registerCallback(event) {
    const { registerUser } = this.props;

    if (this.state.password === this.state.passwordConfirmation) {
      registerUser(this.state.email, this.state.password);
    }
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  handlePasswordConfirmationChange(e) {
    this.setState({passwordConfirmation: e.target.value});
  }

  render() {
    return (
    <div>
      <div>
        <h1>Login</h1>
        <form>
          <div><label>Email: <input type="text" /></label></div>
          <div><label>Password: <input type="password" /></label></div>
          <div><button type="button" onClick={this.loginCallback} className="btn btn-default">Submit</button></div>
        </form>
      </div>

      <div>
        <h1>Register</h1>
        <form>
          <div><label>Email: <input type="text" onChange={this.handleEmailChange} /></label></div>
          <div><label>Password: <input type="password" onChange={this.handlePasswordChange} /></label></div>
          <div><label>Re-enter Password: <input type="password" onChange={this.handlePasswordConfirmationChange} /></label></div>
          <div><button type="button" onClick={this.registerCallback} className="btn btn-default">Submit</button></div>
        </form>
      </div>
    </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    
  };
};

export default connect(
  mapStateToProps,
  (dispatch) => bindActionCreators({...AuthenticationActionCreators}, dispatch),
)(AuthenticationApp);