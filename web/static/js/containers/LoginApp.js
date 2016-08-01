import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

import * as LoginActionCreators from '../actions/login';


const defaultValidationState = {
  email: {
    validationState: null, helpText: null
  },
  password: {
    validationState: null, helpText: null
  },
};

const defaultState = {
  email: '',
  password: '',
  validation: Object.assign({}, defaultValidationState),
};

class LoginApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;

    this.loginCallback = this.loginCallback.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);

    console.log(this.state);
  }

  componentWillReceiveProps(nextProps) {
    const { login } = nextProps;

    if (login.error != null) {
      this.setState({validation:
        Object.assign({}, this.state.validation,
          {email: {validationState: 'error', helpText: null}},
          {password: {validationState: 'error', helpText: login.error}},
        )
      });
    }
  }

  loginCallback(event) {
    const { loginUser } = this.props;
    
    loginUser(this.state.email, this.state.password);
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value, validation: Object.assign({}, defaultValidationState)});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value, validation: Object.assign({}, defaultValidationState)});
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <FormGroup controlId="email" validationState={this.state.validation.email.validationState}>
            <ControlLabel>Email</ControlLabel>
            <FormControl type="text" placeholder="Enter your email" onChange={this.handleEmailChange} />
            <HelpBlock>{this.state.validation.email.helpText}</HelpBlock>
            <FormControl.Feedback />
          </FormGroup>
          <FormGroup controlId="password" validationState={this.state.validation.password.validationState}>
            <ControlLabel>Password</ControlLabel>
            <FormControl type="password" placeholder="Enter your password" onChange={this.handlePasswordChange} />
            <HelpBlock>{this.state.validation.password.helpText}</HelpBlock>
            <FormControl.Feedback />
          </FormGroup>
          <div><button type="button" onClick={this.loginCallback} className="btn btn-default">Submit</button></div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

export default connect(
  mapStateToProps,
  (dispatch) => bindActionCreators({...LoginActionCreators}, dispatch),
)(LoginApp);
