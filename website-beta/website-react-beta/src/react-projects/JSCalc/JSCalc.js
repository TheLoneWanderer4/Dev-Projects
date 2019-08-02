import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

const operators = [
  { value: "*", id: "multiply", className: "" },
  { value: "+", id: "add", className: "" },
  { value: "-", id: "subtract", className: "" },
  { value: "/", id: "divide", className: "" }
];

const buttons = [
  { value: "7", id: "seven", className: "" },
  { value: "8", id: "eight", className: "" },
  { value: "9", id: "nine", className: "" },
  { value: "4", id: "four", className: "" },
  { value: "5", id: "five", className: "" },
  { value: "6", id: "six", className: "" },
  { value: "1", id: "one", className: "" },
  { value: "2", id: "two", className: "" },
  { value: "3", id: "three", className: "" },
  { value: "0", id: "zero", className: "" },
  { value: ".", id: "decimal", className: "" }
];

const isOperator = /[*/+-]/,
  endsWithOperator = /[*+-/]$/,
  startsWithOperator = /^[*+-/]/,
  leadingZero = /\b0+/g,
  constainsDecimal = /\./g;

const reset = { input: "0", formula: "0", curNum: "0" };

const Buttons = props => {
  return (
    <div className="buttons">
      {operators.map(button => (
        <button
          className="btn btn-default bttn bg-light shadow-sm"
          id={button.id}
          key={button.id}
          onClick={() => props.handleButton(button.value)}
        >
          {button.value}
        </button>
      ))}
      {buttons.map(button => (
        <button
          className="btn btn-default bttn bg-light shadow-sm"
          id={button.id}
          key={button.id}
          onClick={() => props.handleButton(button.value)}
        >
          {button.value}
        </button>
      ))}
      <button
        id="clear"
        className="btn bttn btn-warning"
        onClick={props.handleClear}
      >
        AC
      </button>
      <button
        className="btn bttn btn-warning equals"
        id="equals"
        onClick={props.handleEqual}
      >
        =
      </button>
    </div>
  );
};

const Display = props => {
  return (
    <div className="navbar navbar-dark bg-dark text-light flex-column align-items-end">
      <div id="display" className="formula">
        {props.formula}
      </div>
      <div className="input">{props.input}</div>
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = reset;
  }

  handleEqual = () => {
    let formula = this.state.formula;

    if (formula.match(endsWithOperator) || formula.match(startsWithOperator)) {
      formula = "Error: Cannont Start or End in Operator";
    } else {
      formula = eval(this.state.formula).toString();
    }

    this.setState({
      input: "0",
      formula: formula
    });
  };

  handleClear = () => {
    this.setState(reset);
  };

  handleButton = value => {
    let formula = this.state.formula.replace(leadingZero, "");
    let curNum = this.state.curNum.replace(leadingZero, "");

    if (value.match(isOperator)) {
      curNum = "";
    } else if (
      value.match(constainsDecimal) &&
      curNum.match(constainsDecimal)
    ) {
      value = "";
    } else {
      curNum += value;
    }

    if (value.match(isOperator) && formula.match(endsWithOperator)) {
      formula = formula.substring(0, formula.length - 1);
    }

    this.setState({ input: value, formula: formula + value, curNum: curNum });
  };

  render() {
    return (
      <div className="container">
        <div className="calculator bg-primary shadow-lg">
          <Display input={this.state.input} formula={this.state.formula} />
          <Buttons
            handleButton={this.handleButton}
            handleEqual={this.handleEqual}
            handleClear={this.handleClear}
          />
        </div>
      </div>
    );
  }
}

export default App;
