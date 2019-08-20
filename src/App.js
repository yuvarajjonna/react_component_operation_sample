import React, { Component } from 'react';
import './App.css';

import Component1 from './components/Component1/Component1';
import Component2 from './components/Component2/Component2';

class App extends Component {

  constructor() {
    super();
    this.handleData = this.handleData.bind(this);
    this.state = {
      fromChild: ''
    };
  }

  handleData(data) {
    this.setState({
      fromChild: data
    });
  }

  render() {
    return (
      <div className="App">
       <h1>pannel</h1>
        <h5>Received by parent:<br />{this.state.fromChild}</h5>
       <Component1 test={'propValueComponent1'} handlerFromParant={this.handleData}/>
       <Component2 test={'propValueComponent2'} sibling={this.state.fromChild}/>
      </div>
    );
  }
}

export default App;
