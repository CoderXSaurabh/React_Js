import { Component } from "react";

export default class State3 extends Component{
    constructor(props){
        super(props)
        this.state={
            user:this.props.user
        }

    }
    changeUser(){
        this.setState({
            user:"Mandar"
        })
    }

    render(){
        console.log(this.props.user);
        console.log(this.state.user);
        return(
            <>
            <h1>User:{this.state.user}</h1>
            <button onClick={()=>{
                this.changeUser()
            }}>Click</button>
            </>
        )
    }
}