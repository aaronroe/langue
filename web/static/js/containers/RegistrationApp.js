import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

import * as RegistrationActionCreators from '../actions/registration';
import { emailIsValid, collapseStringArray } from '../util';


const MIN_PASSWORD_LEN = 8;

const defaultState = {
  email: '',
  password: '',
  passwordConfirmation: '',
  validation: {
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

class RegistrationApp extends React.Component {
  constructor(props) {
    super(props);

    this.loginCallback = this.loginCallback.bind(this);
    this.registerCallback = this.registerCallback.bind(this);

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordConfirmationChange = this.handlePasswordConfirmationChange.bind(this);

    this._registrationFormIsValid = this._registrationFormIsValid.bind(this);

    this.state = defaultState;
  }

  componentWillReceiveProps(nextProps) {
    const { registration } = nextProps;

    if (registration.errors.email.length > 0) {
      this.setState({validation:
        Object.assign({}, this.state.validation,
          {email: {validationState: 'error', helpText: 'Email ' + registration.errors.email.join(', ')}},
        )
      });
    }
  }

  loginCallback(event) {
    alert('Login Performed');
  }

  registerCallback(event) {
    const { registerUser } = this.props;

    if (this._registrationFormIsValid()) {
      registerUser(this.state.email, this.state.password);
    }
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});

    if (!emailIsValid(e.target.value)) {
      this.setState({validation:
        Object.assign({}, this.state.validation,
          {email: {validationState: 'error', helpText: 'Email is not valid'}},
        )
      });
    } else {
      this.setState({validation:
        Object.assign({}, this.state.validation,
          {email: {validationState: 'success', helpText: 'Email is valid!'}},
        )
      });
    }
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});

    if (e.target.value.length < MIN_PASSWORD_LEN) {
      this.setState({validation:
        Object.assign({}, this.state.validation,
          {password: {validationState: 'error', helpText: `Password must be at least ${MIN_PASSWORD_LEN} characters`}},
          {passwordConfirmation: {validationState: null, helpText: null}},
        )
      });      
    } else if (this.state.passwordConfirmation !== e.target.value) {
      this.setState({validation:
        Object.assign({}, this.state.validation,
          {password: {validationState: 'error', helpText: null}},
          {passwordConfirmation: {validationState: 'error', helpText: 'Passwords do not match'}},
        )
      });
    } else {
      this.setState({validation:
        Object.assign({}, this.state.validation,
          {password: {validationState: 'success', helpText: null}},
          {passwordConfirmation: {validationState: 'success', helpText: 'Passwords match!'}},
        )
      });
    }
  }

  handlePasswordConfirmationChange(e) {
    this.setState({passwordConfirmation: e.target.value});

    if (this.state.password.length >= MIN_PASSWORD_LEN) {
      if (this.state.password !== e.target.value) {
        this.setState({validation:
          Object.assign({}, this.state.validation,
            {password: {validationState: 'error', helpText: null}},
            {passwordConfirmation: {validationState: 'error', helpText: 'Passwords do not match'}},
          )
        });
      } else {
        this.setState({validation:
          Object.assign({}, this.state.validation,
            {password: {validationState: 'success', helpText: null}},
            {passwordConfirmation: {validationState: 'success', helpText: 'Passwords match!'}},
          )
        });
      }
    }
  }

  _registrationFormIsValid() {
    return emailIsValid(this.state.email) &&
    this.state.password.length >= MIN_PASSWORD_LEN &&
    this.state.password == this.state.passwordConfirmation;
  }

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form>
          <FormGroup controlId="register-email" validationState={this.state.validation.email.validationState}>
            <ControlLabel>Email</ControlLabel>
            <FormControl type="text" placeholder="Enter your email" onChange={this.handleEmailChange} />
            <HelpBlock>{this.state.validation.email.helpText}</HelpBlock>
            <FormControl.Feedback />
          </FormGroup>
          <FormGroup controlId="login-password" validationState={this.state.validation.password.validationState}>
            <ControlLabel>Password</ControlLabel>
            <FormControl type="password" placeholder="Enter your desired password" onChange={this.handlePasswordChange} />
            <HelpBlock>{this.state.validation.password.helpText}</HelpBlock>
            <FormControl.Feedback />
          </FormGroup>
          <FormGroup controlId="login-password-confirmation" validationState={this.state.validation.passwordConfirmation.validationState}>
            <ControlLabel>Confirm Password</ControlLabel>
            <FormControl type="password" placeholder="Confirm your desired password" onChange={this.handlePasswordConfirmationChange} />
            <HelpBlock>{this.state.validation.passwordConfirmation.helpText}</HelpBlock>
            <FormControl.Feedback />
          </FormGroup>
          <div><Button type="button" onClick={this.registerCallback} className="btn btn-default" disabled={!this._registrationFormIsValid()}>Submit</Button></div>
        </form>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    registration: state.registration,
  };
};

export default connect(
  mapStateToProps,
  (dispatch) => bindActionCreators({...RegistrationActionCreators}, dispatch),
)(RegistrationApp);