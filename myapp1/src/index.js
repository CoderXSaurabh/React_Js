import React from "react";
import { ReactDOM } from "react";

let element = React.createElement("h1",
{id:"head"},"HELLO WORLD",
React.createElement("h2",{className:"head"},"Heading two"),
React.createElement("button",null)
)
ReactDOM.render(element,document.getElementById("root"))




// Date 07/03/2024

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// // import './index.css';
// import App from './App';
// import Home from './Home';
// // import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <h1>Hello from index.jsx</h1>
//     <App />
//     <Home/>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
