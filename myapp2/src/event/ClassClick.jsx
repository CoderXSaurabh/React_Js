import React, { Component } from 'react'

class ClassClick extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         message:"HELLO"
      }
    }

    changeMessage(){
        this.setState({
            message:"GOOD BYE"
        })
        console.log("Hey");
        console.log(this);
    }
    render(){
        let {message} = this.state
        return(
            <>
                <h1>{message}</h1>
                {/* <button onclick="changeMessage()"></button> */}
                {/* <button onCLick={this.changeMessage()}>Click</button> */}
                <button onClick={()=>{this.changeMessage()}}>Click</button>
            </>
        )
    }
}
export default ClassClick
