import React, { Component } from "react";
class Props extends Component
{
    render(){
        let name="Mandar"
        let obj={
            name:"Mandar c",
            age:23,
            email:"Mandar@gmail.com"
        }
        return(
            <>
            <h1>My name is{name}</h1>
            <h2>my name is {obj.name} and My age is {obj.age} and Gmail is {obj.email}</h2>
            
            </>
        )
    }
}
export default Props