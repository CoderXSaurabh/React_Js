import React,{ Component } from "react";


export default class Props2 extends Component{
    render(){
        return(
            <React.StrictMode>
                <h1>my name is {this.props.name}</h1>
            </React.StrictMode>
        )
    }
}