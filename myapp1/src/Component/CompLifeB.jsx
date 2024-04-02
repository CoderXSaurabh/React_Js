import React, { Component } from 'react'

export default class CompLifeB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
      }
      console.log("CompLifeB constructor()");
    }
    static getDerivedStateFromProps(state,props){
        console.log("CompLifeB staticgetDerivedfromprops()");
        return null;
    }
    componentDidMount(){
        console.log("CompLifeB componentdidmount()")
    }
    incrementCount=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
  render() {
    console.log("Render()")
    return (
       <>
       <h1>Component B</h1>
       <button onClick={this.incrementCount}>Count {this.state.count}</button>
       </>
    )
  }
}