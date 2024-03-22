import React, { Component } from 'react'
import "./App.css";
export default class Card extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userData:null,
      }
    }
    getData(){
         this.fetchData();
    }
    fetchData=async()=>{
        const response = await fetch('./player.json');
        const userData = await response.json();
        this.setState({userData});
    }
    render(){
    return (
     <>
            {/* <div> */}
                {/* <div className="cards"> */}
                    {/* <div className="card"> */}
                        {/* <img src="" alt="" /> */}
                        {/* <div className="cardbody"> */}
                            {/* <span className="cardcategory"> */}
                                {/* {this.props.name} */}
                                {/* <table border="1px solid"> */}
                                    {/* <tr> */}
                                        {/* <td></td> */}
                                        {/* <td>2</td> */}
                                        {/* <td>3</td> */}
                                        {/* <td>4</td> */}
                                        {/* <td>5</td> */}
                                        {/* <td>6</td> */}
                                    {/* </tr> */}
                                    {/* <tr> */}
                                        {/* <td>7</td> */}
                                        {/* <td></td> */}
                                        {/* <td></td> */}
                                        {/* <td></td> */}
                                        {/* <td></td> */}
                                        {/* <td></td> */}
                                    {/* </tr> */}
                                    {/* <tr> */}
                                        {/* <td>13</td> */}
                                        {/* <td></td> */}
                                        {/* <td></td> */}
                                        {/* <td></td> */}
                                        {/* <td></td> */}
                                        {/* <td></td> */}
                                    {/* </tr> */}
                                    {/* <tr> */}
                                        {/* <td>19</td> */}
                                        {/* <td>20</td> */}
                                        {/* <td>21</td> */}
                                        {/* <td>22</td> */}
                                        {/* <td>23</td> */}
                                        {/* <td>24</td> */}
                                    {/* </tr> */}
                                {/* </table> */}
                            {/* </span> */}
                        {/* </div> */}
                    {/* </div> */}
                {/* </div> */}
                {/* </div> */}
            </>
    )
    }
}
