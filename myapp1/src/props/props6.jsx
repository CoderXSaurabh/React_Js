import React from "react";
const props6 = (props)=>{
    let {model,price,make}=props.obj;
    return(
        <div>
            <h1>
                {/* My name is {props.name} */}
                {/* <h1>Model is {props.obj.name}  Price is {props.obj.price} and made in {props.obj.make}</h1> */}
                <h1>
                    Model is {model} Price is {price} And made is{make}
                </h1>

            </h1>
        </div>
    )
}
export default props6