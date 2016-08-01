import React from 'react';


class LoginApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
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
    );
  }
}
