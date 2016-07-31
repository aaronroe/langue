import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

import * as AuthenticationActionCreators from '../actions/authentication';


const defaultState = {
  email: '',
  password: '',
  passwordConfirmation: '',
  loginValidation: {
    email: {
      validationState: null, helpText: null
    }
  },
  registrationValidation: {
    email: {
      validationState: null, helpText: null
    },
    password: {
      validationState: null, helpText: null
    },
    passwordConfirmation: {
      validationState: null, helpText: null
    }
  }
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

    if (e.target.value.length < 10) {
      this.setState({registrationValidation:
        Object.assign({}, this.state.registrationValidation,
          {passwordConfirmation: {validationState: null, helpText: null}},
          {password: {validationState: 'error', helpText: 'Password must be at least 10 characters'}},
        )
      });      
    } else if (this.state.passwordConfirmation !== e.target.value) {
      this.setState({registrationValidation:
        Object.assign({}, this.state.registrationValidation,
          {passwordConfirmation: {validationState: 'error', helpText: 'Passwords do not match'}},
          {password: {validationState: 'error', helpText: null}},
        )
      });
    } else {
      this.setState({registrationValidation:
        Object.assign({}, this.state.registrationValidation,
          {passwordConfirmation: {validationState: 'success', helpText: 'Passwords match!'}},
          {password: {validationState: 'success', helpText: null}},
        )
      });
    }
  }

  handlePasswordConfirmationChange(e) {
    this.setState({passwordConfirmation: e.target.value});

    if (this.state.password !== e.target.value) {
      this.setState({registrationValidation:
        Object.assign({}, this.state.registrationValidation,
          {passwordConfirmation: {validationState: 'error', helpText: 'Passwords do not match'}},
          {password: {validationState: 'error', helpText: null}},
        )
      });
    } else {
      this.setState({registrationValidation:
        Object.assign({}, this.state.registrationValidation,
          {passwordConfirmation: {validationState: 'success', helpText: 'Passwords match!'}},
          {password: {validationState: 'success', helpText: null}},
        )
      });
    }
  }

  render() {
    return (
    <div>
      <div>
        <h1>Login</h1>
        <form>
          <FormGroup controlId="login-email">
            <ControlLabel>Email</ControlLabel>
            <FormControl type="text" placeholder="Enter your email" />
          </FormGroup>
          <FormGroup controlId="login-password">
            <ControlLabel>Password</ControlLabel>
            <FormControl type="passowrd" placeholder="Enter your password" />
          </FormGroup>
          <div><button type="button" onClick={this.loginCallback} className="btn btn-default">Submit</button></div>
        </form>
      </div>

      <div>
        <h1>Register</h1>
        <form>
          <FormGroup controlId="register-email" validationState={this.state.registrationValidation.email.validationState}>
            <ControlLabel>Email</ControlLabel>
            <FormControl type="text" placeholder="Enter your email" onChange={this.handleEmailChange} />
            <HelpBlock>{this.state.registrationValidation.email.helpText}</HelpBlock>
          </FormGroup>
          <FormGroup controlId="login-password" validationState={this.state.registrationValidation.password.validationState}>
            <ControlLabel>Password</ControlLabel>
            <FormControl type="password" placeholder="Enter your desired password" onChange={this.handlePasswordChange} />
            <HelpBlock>{this.state.registrationValidation.password.helpText}</HelpBlock>
          </FormGroup>
          <FormGroup controlId="login-password-confirmation" validationState={this.state.registrationValidation.passwordConfirmation.validationState}>
            <ControlLabel>Confirm Password</ControlLabel>
            <FormControl type="password" placeholder="Confirm your desired password" onChange={this.handlePasswordConfirmationChange} />
            <HelpBlock>{this.state.registrationValidation.passwordConfirmation.helpText}</HelpBlock>
          </FormGroup>
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