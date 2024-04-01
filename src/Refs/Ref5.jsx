import React, { Component } from 'react';

export default class Ref5 extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.createEle = React.createRef();
    this.state = {
      img1: "https://tse4.mm.bing.net/th?id=OIP.e84Nt2j_mFVavEh7F9hWrgHaD5&pid=Api&P=0&h=180",

      img2: "https://tse4.mm.bing.net/th?id=OIP.DcANjzZ5D95VCSJX-G9DVgHaE6&pid=Api&P=0&h=180",
      
      img3:"https://tse3.mm.bing.net/th?id=OIP.OwWv98G3f8K_8QGpyqP0pQHaEK&pid=Api&P=0&h=180",

      img4:"https://tse2.mm.bing.net/th?id=OIP.HovO5ggppGE4c0vQq5NrsAHaE8&pid=Api&P=0&h=180",

      img5:"https://tse3.mm.bing.net/th?id=OIP.IYhBujU6zB4P0dC5gA0ZgAHaHa&pid=Api&P=0&h=180",

      currentImg: null,
    };
  }

  componentDidMount() {
    console.log(this.input);
  }

  clickHandler = () => {
    const inputValue = this.input.current.value;
    const { img1, img2 , img3 ,img4,img5} = this.state;
    this.createEle.current.style.height="300px"
    this.createEle.current.style.width="400px"
    this.createEle.current.style.backgroundCover="cover";
    this.createEle.current.style.backgroundRepeate="no-repeate";

    if (inputValue === "supra") {
      this.setState({ currentImg: img1 });
    } else if (inputValue === "audi") {
      this.setState({ currentImg: img2 });
    }else if (inputValue === "kia") {
        this.setState({ currentImg: img3 });
    }else if (inputValue === "thar") {
      this.setState({ currentImg: img4 });
    }else if (inputValue === "creta") {
      this.setState({ currentImg: img5 });
    }else {
      alert("Car Not present");
    }
  };

  render() {
    const { currentImg } = this.state;
    return (
      <React.StrictMode>
      <div id='main'>
      <div className='inputTag'>
        {/* <label for="cars">Choose a car:</label> */}
        <select name="cars" id="cars" ref={this.input}>
          <option value="supra" >Supra</option>
          <option value="audi" >Audi</option>
          <option value="kia" >Kia</option>
          <option value="thar" >Thar</option>
          <option value="creta" >Creta</option>
        </select>
        </div>
      <div
          className='Box'
          ref={this.createEle}
          style={{
            backgroundImage: currentImg ? `url(${currentImg})` : 'none',
            margin:'10px auto',
            // height: '200px',
            // width: '200px',
            // border: '1px solid black',
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        <div className='btn'>
        <button onClick={this.clickHandler}>Click Here...</button></div>
        </div>
      </React.StrictMode>
    );
  }
}



// import React, { Component } from 'react'

// export default class Ref5 extends Component {
//     constructor(props) {
//       super(props)
//       this.input = React.createRef();
//       this.createEle = React.createRef();
//       this.state={
//         img1:"https://tse2.mm.bing.net/th?id=OIP.HovO5ggppGE4c0vQq5NrsAHaE8&pid=Api&P=0&h=180"
//       }
//       this.state={
//         img2:"https://tse4.mm.bing.net/th?id=OIP.DcANjzZ5D95VCSJX-G9DVgHaE6&pid=Api&P=0&h=180"
//       }
//       this.state={
//         img3:"https://tse3.mm.bing.net/th?id=OIP.OwWv98G3f8K_8QGpyqP0pQHaEK&pid=Api&P=0&h=180"
//       }
      
//     }
//     componentDidMount(){
//         console.log(this.input);
//     }
//     clickHandler=()=>{
//         this.createEle.current.style.height="200px"
//         this.createEle.current.style.width="200px"
//         this.createEle.current.style.border="200px"
//         this.createEle.current.style.backgroundCover="cover";
//         this.createEle.current.style.backgroundRepeate="no-repeate";

//         if(this.input.current.value==="thar"){
//             this.createEle.current.style.backgroundImage=`url(${this.state.img1})`;
            
//         }
//         // else if(this.input.current.value==="audy"){
//         //     this.createEle.current.style.backgroundImage=`url(${this.state.img2})`;
//         // }else if(this.input.current.value==="kia"){
//         //     this.createEle.current.style.backgroundImage=`url(${this.state.img3})`;
//         // }
//         else{
//             // this.createEle.current.style.backgroundImage=`url(${this.state.img3})`;
//             // alert("Car Not present");
//         }
//     }

//     render() {
//     return (
//       <React.StrictMode>
//             <input type="text" className='inp' id='' name='' ref={this.input} />
//             <div className='Box' ref={this.createEle}></div>
//             <button onClick={this.clickHandler}>Click Here...</button>
//       </React.StrictMode>
//     )
//   }
// }
