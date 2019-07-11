import ReactDOM from "react-dom";
import React, { Component } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

const Quote = ({ quote }) => (
  <div className="card-title" id="text">
    {quote}
  </div>
);

const NewQuoteButton = ({ onClick }) => (
  <button className="btn btn-primary" onClick={onClick}>
    {" "}
    New Quote{" "}
  </button>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: ["u", "q", "g", "f"],
      colors: [],
      currentQuote: "test",
      currentColor: "#fff"
    };
  }

  componentDidMount() {
    //make ajax call
  }

  handleNewQuote = () => {
    const quotes = this.state.quotes;
    const newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    this.setState({
      currentQuote: newQuote
    });
  };

  render() {
    return (
      <div id="container">
        <div className="card content p-2 mt-2">
          <Quote quote={this.state.currentQuote} />
          <NewQuoteButton onClick={this.handleNewQuote} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
