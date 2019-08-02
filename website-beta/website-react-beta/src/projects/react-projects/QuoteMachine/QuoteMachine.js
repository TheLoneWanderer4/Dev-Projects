import React, { Component } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

const Quote = ({ quote }) => (
  <div className="card-body" id="text">
    {quote}
  </div>
);

const Author = ({ author }) => (
  <div id="author" className="">
    {"- "}
    {author}
  </div>
);

const NewQuoteButton = ({ onClick }) => (
  <div id="new-quote" className="btn btn-secondary" onClick={onClick}>
    New Quote
  </div>
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
    Tweet
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
      <div className="quote">
        <div className="card shadow content" id="quote-box">
          <Quote id="text" quote={this.state.currentQuote.quote} />
          <div className="buttons-group m-2">
            <TwitterButton
              quote={this.state.currentQuote.quote}
              author={this.state.currentQuote.author}
            />
            <Author id="author" author={this.state.currentQuote.author} />
            <NewQuoteButton onClick={this.handleNewQuote} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
