import React, { Component } from "react";
import { Increment, Decrement } from "./Action/Action";
import { connect } from "react-redux";
const mapStateToProps = (props) => {
  return {
    inc: props.increment,
    dec: props.decrement,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(Increment()),
    decrement: () => dispatch(Decrement()),
  };
};

export class App extends Component {
  render() {
    return (
      <div>
        <h1>Increment Count : {this.props.inc}</h1>
        <h1>Decrement Count : {this.props.dec}</h1>
        <button onClick={() => this.props.increment()}>Add</button>
        <button onClick={() => this.props.decrement()}>Sub</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
