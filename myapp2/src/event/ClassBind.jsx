import React, { Component } from 'react'

class ClassBind extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message:"Hello Brother"
    }
    // this.changeMessage=this.changeMessage.bind(this) //3rd
  }
  changeMessage(){
        this.setState({
            message:"Bas ki kiti bolashil...."
        })
        console.log(this);
        console.log("hey");
  }
    render() {
        let {message} = this.state
    return (
      <div>
        <h1>{message}</h1>
        {/* <button onClick={this.changeMessage}>Click</button> By constructor */}
        {/* 2nd method */}
        <button onClick={this.changeMessage.bind(this)}> Click</button>
        {/* 3rd method is By meking the function as fat arrow function */}
        {/* <button onClick={this.changeMessage}></button> */}
      </div>
    )
  }
}
export default ClassBind
