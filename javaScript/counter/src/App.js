import React, { Component } from "react";
import Counters from "./components/counters";

class App extends Component {
  render() {
    return (
      <div className="m-2">
        <h1> Food list </h1>
        <Counters />
      </div>
    );
  }
}

export default App;
