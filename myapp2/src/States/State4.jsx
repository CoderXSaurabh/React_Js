import { Component } from "react";

export default class State4 extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
        }

    }
    count(){
        this.setState({
            count:this.state.count+1,
        })
    }

    render(){
        // console.log(this.props.user);
        // console.log(this.state.user);
        return(
            <>
            <h1>Count:{this.state.count}</h1>
            <button onClick={()=>{
                this.count()
            }}>Click</button>
            </>
        )
    }
}