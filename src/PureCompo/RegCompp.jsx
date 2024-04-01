import React, { Component } from 'react'

export default class RegCompp extends Component {
  render() {
    console.log("-----REGULAR COMPONENT-----");
    return (
      <div>
        <h1>REGULAR COMPONENT {this.props.name}</h1>
      </div>
    )
  }
}
