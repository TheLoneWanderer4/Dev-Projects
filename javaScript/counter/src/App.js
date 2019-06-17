import React, { Component } from "react";
import Counter from "./components/counter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["Food", "Water", "Money"]
    };
  }
  render() {
    return (
      <div>
        <Counter value="Food" />
      </div>
    );
  }
}

export default App;
