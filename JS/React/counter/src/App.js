import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import Form from "./components/newCounter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        { id: 1, value: 4 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 }
      ],
      archive: []
    };
  }

  handleUndo = () => {
    if (this.state.archive.length > 0) {
      const counters = this.state.counters.concat(
        this.state.archive[this.state.archive.length - 1]
      );
      const archive = this.state.archive.slice(
        0,
        this.state.archive.length - 1
      );
      console.log(counters);
      console.log(archive);
      this.setState({ counters, archive });
    } else {
      alert("Archive is empty");
    }
  };

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
    console.log(this.state);
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;

    console.log(counters);

    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value > 0) {
      counters[index].value--;
    }
    this.setState({ counters });
  };

  handleDelete = id => {
    Array.prototype.diff = function(a) {
      return this.filter(function(i) {
        return a.indexOf(i) < 0;
      });
    };
    const counters = this.state.counters.filter(counter => counter.id !== id);
    const archive = this.state.archive.concat(
      this.state.counters.diff(counters)
    );
    this.setState({ counters, archive });
  };

  handleNewCounter = newId => {
    let newCounter = { id: newId, value: 0 };
    const counters = [...this.state.counters];
    counters.push(newCounter);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          counterCount={
            this.state.counters.filter(counter => counter.value > 0).length
          }
        />
        <main className="container">
          <Form onNewCounter={this.handleNewCounter} />
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onUndo={this.handleUndo}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
