import React, { Component } from 'react';
import "./loginform.css";
export class Login extends Component {
  render() {
    return (
      <div>
        <div id="back">
          <h1>Login Form</h1>
          <div className='form'>
            <form>
              <table>
                <tr>
                  <td>Email:</td>
                  <td><input type="email" name="" id="" placeholder='email' /></td>
                </tr>
                <tr>
                  <td>Password:</td>
                  <td><input type="password" name="" id="" placeholder='password' /></td>
                </tr>
              </table>
              <input type="submit" value="Login" />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login