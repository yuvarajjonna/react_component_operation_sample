import React, { Component } from 'react';

export default class Component2 extends Component {
  render() {
    return (
      <div className="component2">
        <h1>component2</h1>
        <p>{this.props.test}</p>
        <h2>received data from component1 and it is sent to the component2 as shown</h2>
        {this.props.sibling}
      </div>
    )
  }
}
