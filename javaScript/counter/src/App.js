import React from "react";
import logo from "./logo.svg";
import Counter from "./components/counter";

class App extends React.Component {
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
