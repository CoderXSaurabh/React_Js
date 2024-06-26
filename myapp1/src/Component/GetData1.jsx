// json placeholder 
import React, { Component } from 'react'
import axios from 'axios'
class GetData1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts").then(
        (res)=>{
            console.log(res.data);
            this.setState({
                posts:res.data
            })
        }
        ).catch(()=>{
            alert("data is not found")
        })
    }
    render() {
        let {posts}=this.state;
    return (
      <React.StrictMode>{
        posts.length?posts.map((post)=>{
            return <div key={post.id}>{post.id}{post.title}{post.body}</div>
        }):null
        }
        
      </React.StrictMode>
    )
  }
}

export default GetData1