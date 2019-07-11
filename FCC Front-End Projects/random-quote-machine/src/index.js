import ReactDOM from "react-dom";
import React, { Component } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

const Quote = ({ quote }) => (
  <div className="card-title m-2" id="text">
    {quote}
  </div>
);

const Author = ({ author }) => (
  <div id="author" className="mt-4">
    <div>
      {"- "}
      {author}
    </div>
  </div>
);

const NewQuoteButton = ({ onClick }) => (
  <button id="new-quote" className="btn btn-secondary" onClick={onClick}>
    New Quote
  </button>
);

const TwitterButton = ({ quote, author }) => (
  <a
    id="tweet-quote"
    className="btn btn-secondary"
    href={
      "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
      encodeURIComponent('"' + quote + '" ' + author)
    }
  >
    <div style={{ marginTop: "15%" }}>Tweet</div>
  </a>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      currentQuote: { quote: "", author: "" }
    };
  }

  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then(res => res.json())
      .then(res => {
        console.log(res);
        const quotes = res.quotes;
        this.setState({ quotes, currentQuote: quotes[0] });
      });
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
      <div className="container">
        <div className="card shadow content p-4" id="quote-box">
          <Quote id="text" quote={this.state.currentQuote.quote} />
          <div className="buttons mt-2">
            <div className="btn-group">
              <TwitterButton
                quote={this.state.currentQuote.quote}
                author={this.state.currentQuote.author}
              />
            </div>
            <Author id="author" author={this.state.currentQuote.author} />
            <div className="btn-group">
              <NewQuoteButton onClick={this.handleNewQuote} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
