import React,{ Component } from "react";

export default class Child extends Component{
    render(){
        
        
        return(
            <>
            <h1>My name is {this.props.human.name} </h1>
            </>
        )
    }
}