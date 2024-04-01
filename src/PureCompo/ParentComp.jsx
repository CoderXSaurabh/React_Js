import React, { Component } from 'react'
import RegCompp from './RegCompp';
import PureComp from './PureComp';

export default class ParentComp extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         name:"SAURABH"
      }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:"Nilesh"
            })
        }, 3000)
    }

    render() {
    console.log("-----PARENT COMPONENT-----");
    return (
      <div>
        <h1>PARENT COMPONENT {this.state.name}</h1>
        <RegCompp name={this.state.name}/>
        <PureComp name={this.state.name}/>

      </div>
    )
  }
}
