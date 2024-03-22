import React, { Component } from 'react'

export default class start extends Component {
  render() {
    return (
      <>
        <div>
        <div id="back">
          
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
      </>
    )
  }
}
