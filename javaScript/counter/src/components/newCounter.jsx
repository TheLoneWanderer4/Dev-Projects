import React, { Component } from "react";

class newCounter extends Component {
  render() {
    return (
      <form
        className="m-2"
        onSubmit={event => {
          event.preventDefault();
          this.props.onNewCounter(this.refs.id.value);
          this.refs.id.value = "";
        }}
      >
        <input type="text" ref="id" />
        <input className="btn btn-primary btn-small m-2" type="submit" />
      </form>
    );
  }
}

export default newCounter;
