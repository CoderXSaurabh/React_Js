import React, { Component } from "react";
import Login from "./Login";
import Registration from "./Registration";
export default class ConditionCheck extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
            isLogIn:false,
        }
    }
    render() {

            if(this.state.isLogIn) {
            return (
                <>
                    <Login />
                </>
            )
        }
        else {
            return (
                <>
                    <Registration />
                </>
            )
        }
    }
}