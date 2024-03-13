import React from "react";
import  ReactDOM  from "react-dom";
// import Home from "./Home";
import App from "./App";
import Props from "./props/Props";
import Props2 from "./props/Props2";
import Child from "./props/Child";
import Parent from "./props/Parent";



const root=ReactDOM.createRoot(document.getElementById("root"));
// const heading1=React.createElement("H1",{title:"Heading1"},"Heading....");
// const heading2=React.createElement("H1",{title:"Heading2"},"Heading2....");

// const container=React.createElement("div",{title:"Container"},[heading1,heading2])

// root.render(container);
root.render(
    <React.StrictMode>
        
        {/* <Props/>
        <Props2 name="Jay"/>
        <Parent/> */}
        <App />
        {/* <Child/> */}
    </React.StrictMode>
    
)


// let element= React.createElement("h1",{id:"head"},"Hello World!!!!",
// React.createElement("h2",{className:"head"},"HEading Two"),React.createElement("button",{className:"head"},"button"))

// ReactDOM.render(element,document.getElementById("root"))