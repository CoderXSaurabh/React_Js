import React, { Component } from 'react'
import CompLifeD from './CompLifeD';

export default class CompLifeC extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
      }
      console.log("CompLifeC constructor()");
    }
    static getDerivedStateFromProps(state,props){
        console.log("CompLifeC staticgetDerivedfromprops()");
        return null;
    }
    componentDidMount(){
        console.log("CompLifeC componentdidmount()")
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
       <h1>Component C</h1>
       <CompLifeD/>
       {/* <button onClick={this.incrementCount}>Count {this.state.count}</button> */}
       </>
    )
  }
}