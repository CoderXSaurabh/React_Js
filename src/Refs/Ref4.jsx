import React, { Component } from 'react'

export default class Ref4 extends Component {
  constructor(props) {
    super(props)
    this.createEle = React.createRef();
    this.state ={
        img:"https://tse1.mm.bing.net/th?id=OIP.jGC8sSGtVG65J9C327MMQAHaEK&pid=Api&P=0&h=180"
    }

  }
  componentDidMount(){
    console.log(this.createEle);
  }
  clickHandler=()=>{
    // if(this.)
    this.createEle.current.style.height="200px"
    this.createEle.current.style.width="200px"
    this.createEle.current.style.border="200px"
    this.createEle.current.style.backgroundImage=`url(${this.state.img})`;
    this.createEle.current.style.backgroundCover="cover";
    this.createEle.current.style.backgroundRepeate="no-repeate";
  }
    render() {
    return (
      <>
        <div className="box1" ref={this.createEle}></div>
        <button onClick={this.clickHandler}>Click Here...</button>
      </>
    )
  }
}
