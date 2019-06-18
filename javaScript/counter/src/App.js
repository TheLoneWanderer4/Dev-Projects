import React, { Component } from "react";
import Counter from "./components/counter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["Food", "Water", "Money"]
    };
  }

  handleCreate = event => {
    event.preventDefault();

    let item = this.input.value;
    let items = this.state.items;

    if (items.indexOf(item) != -1) {
      alert(`${item} Already in list`);
      return;
    }

    items.push(this.input.value);
    this.setState({ items: items });
  };

  handleRemove = item => {
    let hold = this.state.items;
    hold.splice(this.state.items.indexOf(item), 1);
    this.setState({
      items: hold
    });
  };

  render() {
    return (
      <div className="m-2">
        <h1> Food list </h1>
        <form onSubmit={this.handleCreate}>
          <input ref={input => (this.input = input)} type="text" />
          <input className="btn btn-sm m-1 btn-warning" type="submit" />
        </form>
        {this.state.items.map(item => {
          return (
            <div className="m-2">
              <Counter key={item} value={item} />
              <button
                className="btn btn-sm m-1 btn-danger"
                onClick={() => this.handleRemove(item)}
              >
                {" "}
                Remove{" "}
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
