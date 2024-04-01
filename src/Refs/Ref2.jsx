import React, { Component } from 'react'

class Ref2 extends Component {
    constructor(props) {
      super(props)
    
      this.inputref1=React.createRef();
      this.inputref2 = React.createRef();
    }
    componentDidMount(){
        console.log(this.inputref1);
        console.log(this.inputref2);
    }
    clickHandler=()=>{
        if(this.inputref1.current.value==="saurabh@123.com" && this.inputref2.current.value==="saurabh@123"){
            alert(`Logged in `)
        }
        else{
            alert(`Invalid credentials`)
        }
    }

  render() {
    return (
      <React.StrictMode>
        <input type="email" className='inp1' id='' name="" ref={this.inputref1} /><br/>
        <input type="password" className='inp2' id='' name="" ref={this.inputref2} /><br/>
        <button onClick={this.clickHandler}>Click Here...</button>
      </React.StrictMode>
    )
  }
}
export default Ref2
