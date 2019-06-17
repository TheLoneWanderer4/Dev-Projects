import React, { Component } from "react";
import Counter from "./components/counter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["Food", "Water", "Money"]
    };
  }

  handleCreate = () => {
    this.setState({ items: this.state.items.concat(["new"]) });
  };

  render() {
    return (
      <div>
        <h1> Food list </h1>
        {this.state.items.map(item => {
          return <Counter value={item} />;
        })}
        <button onClick={this.handleCreate}> Create new Item </button>
      </div>
    );
  }
}

export default App;
