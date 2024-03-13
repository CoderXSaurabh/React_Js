import React from "react";

const defProps1 =(props)=>{
    return(
    <>
        <h1>My name is {props.name}</h1>
    </>
    )

}

defProps1.defaultProps={
    name:"jay",
    age:23
}

export default defProps1;