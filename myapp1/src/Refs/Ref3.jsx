import React, { Component } from 'react'
import Ref2 from "./Ref2"
export default class Ref3 extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef1 = React.createRef()
      this.cbRef = null;
      this.setcbRef=(element)=>{
        this.cbRef=element;
      }
      console.log(this.cbRef);
    }

    componentDidMount(){
        console.log(this.cbRef);
    }

    clickHandler=()=>{
        if(this.cbRef){
            alert(`${this.cbRef.value}`)
            
        }else{
            alert(`Invalid input...`)
        }
    }   
    render() {
    return (
      <div>
        <input type="text" ref={this.setcbRef} />
        <button onClick={this.clickHandler}>Click Here</button>
        {/* <Ref2/> */}
      </div>
    )
  }
}
