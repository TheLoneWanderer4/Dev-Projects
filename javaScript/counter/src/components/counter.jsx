import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <span className={this.getBadgeClasses()}> {this.formateCount()} </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-1"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-1"
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  formateCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }

  getBadgeClasses() {
    return (
      "badge m-2 " +
      (this.props.counter.value === 0 ? "badge-warning" : "badge-primary")
    );
  }
}

export default Counter;
