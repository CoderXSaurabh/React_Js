
import React from "react";
import App from "../Styling/App.css"

const Navbar=(props)=>{
    return(
        <>
        <h1>{props.name}</h1>
        <nav>
        <ul >
            <li><a href="">Home</a> </li>
            <li><a href="">Contact</a></li>
            <li><a href="">About</a></li>
        </ul>
        </nav>
        </>
    )
}
export default Navbar