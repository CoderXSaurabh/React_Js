import React, { Component } from 'react'
import "./form.css";
export class Registration extends Component {
  render() {
    return (
      <>
      <div id="back">
        <h2>Registration Form</h2>
      <div className='parent'>
          <form>
            <table>
                <tr>
                <td>First Name:</td>
                <td><input type="text" name="" id="" placeholder='first name' /></td>
                </tr>
                <tr>
                <td>Last Name:</td>
                <td><input type="text" name="" id="" placeholder='last name'/></td>
                </tr>
                <tr>
                <td>Email:</td>
                <td><input type="email" name="" id="" placeholder='email' /></td>
                </tr>
                <tr>
                <td>Contact No:</td>
                <td><input type="number" name="" id="" placeholder='phone' /></td>
                </tr>
                <tr>
                <td>Password:</td>
                <td><input type="password" name="" id="" placeholder='password' /></td>
                </tr>
            </table>
            <input type="submit" value="Register" />
          </form>
      </div>
      </div>
      </>
    )
  }
}

export default Registration
