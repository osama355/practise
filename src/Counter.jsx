import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  Increment() {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    return (
      <>
        <h1>counter {this.state.count}</h1>
        <button onClick={() => this.Increment()}>Increment</button>
      </>
    );
  }
}

export default Counter;