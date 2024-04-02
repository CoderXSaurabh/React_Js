import React, { Component } from 'react'

export default class CompLifeD extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
      }
      console.log("CompLifeD constructor()");
    }
    static getDerivedStateFromProps(state,props){
        console.log("CompLifeD staticgetDerivedfromprops()");
        return null;
    }
    componentDidMount(){
        console.log("CompLifeD componentdidmount()")
    }
    incrementCount=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
  render() {
    console.log("Render()")
    console.log(this.state.count);
    return (
       <>
       <h1>Component D</h1>
       <button onClick={this.incrementCount}>Count {this.state.count}</button>
       </>
    )
  }
}