import React, { Component } from 'react'

export default class state3 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         user:this.props.user,
      }
    }
    changeUser(){
        this.setState({
            user:"ganeshrav"
        })
    }

    render() {
        // console.log(this.state.user);
        return (
      <>
        <h1>welcome {this.state.user}</h1>
        <button onClick={()=>{this.changeUser()}}></button>
      </>
    )
  }
}
