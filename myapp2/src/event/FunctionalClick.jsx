import React from 'react'

const FunctionalClick = () => {
  function getPrint(params){
    console.log("Clicked!!");
  }
    return (
    // <div>FunctionalClick</div>
    // <button >Click</button>
    // <button onclick="getPrint()">Click</button>
    // <button onClick="getPrint()">Click</button>
    <button onClick={getPrint}>Click</button>
  )
}
export default FunctionalClick
