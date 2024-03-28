import React, { PureComponent } from 'react'

export default class PureComp extends PureComponent {
  render() {
    console.log("-----PURE COMPONENT-----");
    return (
      <div>
        <h1>PURE COMPONENT {this.props.name}</h1>
      </div>
    )
  }
}
