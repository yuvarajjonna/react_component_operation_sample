import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Component1 extends Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.state = {
      inputField: ''
    };
  }

  submitHandler(evt) {
    evt.preventDefault();
    this.props.handlerFromParant(this.state.inputField);
    this.setState({
      inputField: ''
    });
  }

  handleChange(event) {
    this.setState({
      inputField: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Component1</h1>
        {this.props.test}
        <form onSubmit={this.submitHandler}>
          <input type="text" 
                 id="theInput" 
                 value={this.state.inputField} 
                 onChange={this.handleChange} />
          <input type="submit" />
        </form>
        <h5>Visible in child:<br />{this.state.inputField}</h5>
      </div>
    )
  }
}

Component1.propTypes = {
  handlerFromParant: PropTypes.func
}