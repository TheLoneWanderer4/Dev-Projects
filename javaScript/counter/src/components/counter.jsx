import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      tags: ["tag1", "tag2", "tag3"]
    };
  }
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}> {this.formateCount()} </span>
        <button className="btn btn-secondary btn-sm"> Increment </button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
  formateCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
  getBadgeClasses() {
    return (
      "badge m-2" + (this.state.count === 0 ? "badge-warning" : "badge-primary")
    );
  }
}

export default Counter;
