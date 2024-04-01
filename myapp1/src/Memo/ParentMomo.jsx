import React, { Component } from 'react';
import Memo1 from './Memo1';

class ParentMomo extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
         name: "ajay",
         count: 0
      };
    }

    clickHandler = () => {
        this.setState({
            name: "Vijay"
        });
    };

    clickIncrement = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    render() {
        console.log("******Parent Memo******");
        console.log(this.state.count);
        return (
            <>
                <Memo1 name1={this.state.name} count1={this.state.count}/>
                <button onClick={this.clickHandler}>Change</button>
                <button onClick={this.clickIncrement}>Increment</button>
            </>
        );
    }
}

export default ParentMomo;

// import React, { Component } from 'react'
// import Memo1 from './Memo1'

// class ParentMomo extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          name:"ajay",
//          count:0
//       }
//     }
//     clickHandler=()=>{
//         this.setState({
//             neme:"Vijay"
//         })
//     }
//     clickIncrement=()=>{
//         this.setState({
//             count:this.state.count+1
//         })
//     }
//   render() {
//     console.log("******Parent Memo******");
//     console.log(this.state.count);
//     return (
//         <>
//             <Memo1 name1={this.state.name} count1={this.state.count}/>
//             <button onClick={this.clickHandler}>Change</button>
//             <button onClick={this.clickHandler}>Increment</button>
//         </>
//     )
//   }
// }

// export default ParentMomo