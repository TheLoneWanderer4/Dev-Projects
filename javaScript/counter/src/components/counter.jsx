import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.value,
      count: 0
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <React.Fragment>
        <span className="m-1"> {this.state.name} </span>
        <span className={this.getBadgeClasses()}> {this.formateCount()} </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm m-1"
        >
          +
        </button>
        <button
          onClick={this.handleDecrement}
          className="btn btn-secondary btn-sm m-1"
        >
          -
        </button>
      </React.Fragment>
    );
  }

  formateCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }

  getBadgeClasses() {
    return (
      "badge m-2 " +
      (this.state.count === 0 ? "badge-warning" : "badge-primary")
    );
  }
}

export default Counter;
