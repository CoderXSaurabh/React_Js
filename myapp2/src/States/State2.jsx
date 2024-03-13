import { Component } from "react";

 
 export default class State2 extends Component{
    constructor(props){
        super(props)

        this.state={
            message:"Subscribe here"
        }
    }
    changehandler(){
        this.setState({
            message:"Subscribed!!"
        })
    }
    render(){
        return(
            <>
            <h1>{this.state.message}</h1>
            <button onClick={()=>{this.changehandler()}}>Click</button>
            </>
        )
    }
 }