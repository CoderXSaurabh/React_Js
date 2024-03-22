import React, { Component } from 'react'
import "./Form.css"
import User from "./Assest/userjpeg.jpeg"
import Email from "./Assest/email.png"
import pass from "./Assest/password.png"
export default class RegForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        action:"sign-up"
      }
    }
  render() {
    return (
      <React.StrictMode>
        <form action="">
            <div className="main">
                <div className="text">{this.state.action}</div>
                    <div className="parent">
                        {
                            this.state.action==="LOGIN"?<div></div>:<div className="input">
                            <img src={User} alt="" />
                            <input type="text" class="fields" name='' id='' placeholder='Enter name'/>
                        </div>
                        }
                        <div className="input">
                            <img src={Email} alt="" />
                            <input type="email" name='' class="fields" id='' placeholder='Enter Email Id'/>
                        </div>
                        <div className="input">
                            <img src={pass} alt="" />
                            <input type="password" class="fields" name='' id='' placeholder='Enter Password'/>
                        </div>
                        <div className="button">
                            <div className={this.state.action==="LOGIN"?"grey":"sign-up"} onClick={()=>{ this.setState({action:"SIGN-UP"}) }}>Sign Up</div>
                            <div className={this.state.action==="SIGN-UP"?"grey":"log"} onClick={()=>{this.setState({action:"LOGIN"})}}>LogIn</div>
                        </div>
                </div>
                
            </div>
        </form>
      </React.StrictMode>
    )
  }
}
