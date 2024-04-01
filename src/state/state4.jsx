import React, { Component } from 'react'

export default class state4 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0,
    }
  }
  changeCount(){
    this.setState({
        count:this.state.count +1,
    })
  }
    render() {
        let {count} = this.state;
    return (
      <div><h1>{count}</h1> 
        <button onClick={()=>{this.changeCount()}}></button>
      </div>
      
    )
  }
}
