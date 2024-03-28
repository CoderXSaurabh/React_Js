import React, { Component } from 'react'
import { InputRef } from './InputRef';

export default class ParentRef extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
      console.log(this.inputRef);
    }
    componentDidMount(){
        console.log(this.inputRef);
    }

    clickHandler=()=>{
        alert(`My son is ${this.inputRef.current.value}`)
    }

    onBlur=()=>{
        this.inputRef.current.value = this.inputRef.current.value.toUpperCase();
    }

    render() {
    return (
      <>
        <InputRef type="text"   ref={this.inputRef} onBlurHandle={this.onBlur}/>
        <button onClick={this.clickHandler}>Click Here...</button>
      </>
    )
  }
}
