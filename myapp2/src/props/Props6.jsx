import React from "react";

const Props6 =(props)=>{
let {model,price,make}=props.obj;
    return(
        <>
        {/* <h1>My name is {props.name}</h1> */}
        <h1>model is {model} <br />Price is {price} <br /> make in {make}</h1>
        </>
    )
}
export default Props6;