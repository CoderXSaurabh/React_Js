
import React, { Component } from "react";

export default class State1 extends Component{
    constructor(props){
        super(props)

        this.state={
            message:"welcome user!!"
        }
    }
    render(){
        return(
            <h1>{this.state.message}</h1>
           
        )
    }
}

