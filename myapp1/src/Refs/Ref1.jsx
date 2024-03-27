import React, { Component } from 'react'

export default class ref1 extends Component {
    constructor(props) {
        super(props)
        this.inputref = React.createRef()
        console.log(this.inputref);
    
      }
      componentDidMount(){
        console.log(this.inputref);
        console.log(this.inputref.current);
        console.log(this.inputref.current.className);
        this.inputref.current.focus()
      }
      clickHandle=()=>{
        alert(`${this.inputref.current.value}`)
      }
        render() {
        return (
          <React.StrictMode>
          <input type="text" className='inp1' name="" ref={this.inputref} />
          <button >Click Here</button>
          </React.StrictMode>
        )
      
    }
}
// export defa[ult ref1