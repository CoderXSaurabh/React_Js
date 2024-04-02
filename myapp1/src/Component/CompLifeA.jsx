import React, { Component } from 'react'

export default class CompLifeA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
      console.log("CompLifeA constructor()");
    }
    static getDerivedStateFromProps(state,props){
        console.log("CompLifeA staticgetDerivedfromprops()");
        return null;
    }
    componentDidMount(){
        console.log("CompLifeA componentdidmount()")
    }
  render() {
    console.log("Render()")
    return (
       <>
       Component A
       </>
    )
  }
}