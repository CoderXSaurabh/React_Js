import React, { Component } from 'react'

export default class state2 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message:"subscribe here"
    }
  }
  changeHandler(){
    this.setState({
        message:"Thank you for subscription"
    })
  }

    render() {
        
        return (
      <div>
        
        <h1>this.state</h1>
        <button onClick={this.changeHandler}>click here to subscribe</button>
      </div>
    )
  }
}

// export 