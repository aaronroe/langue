import React from 'react';

export default function AuthenticationApp(props) {
  let loginCallback = (event) => {
    alert('Login Performed.');
  }
  let registerCallback = (event) => {
    alert('Registration Performed.');
  };

  return (
  <div>
    <div>
      <h1>Login</h1>
      <form>
        <div><label>Email: <input type="text" /></label></div>
        <div><label>Password: <input type="password" /></label></div>
        <div><button onClick={loginCallback} className="btn btn-default">Submit</button></div>
      </form>
    </div>

    <div>
      <h1>Register</h1>
      <form>
        <div><label>Email: <input type="text" /></label></div>
        <div><label>Password: <input type="password" /></label></div>
        <div><label>Re-enter Password: <input type="password" /></label></div>
        <div><button onClick={registerCallback} className="btn btn-default">Submit</button></div>
      </form>
    </div>
  </div>
  );
}
