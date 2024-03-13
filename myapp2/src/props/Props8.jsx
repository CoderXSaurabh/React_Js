import React from "react";
import { render } from "react-dom";

const Props8=(props)=>{
   
        return(
            <>
            {/* <img src={props.photo} height="200px" width="200px" alt="" /> */}
            <iframe width="560" height="315" src={props.vid} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </>
        )
}
export default Props8