import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

const buttons = [
  { value: "*", id: "multiply", className: "" },
  { value: "/", id: "divide", className: "" },
  { value: "1", id: "one", className: "" },
  { value: "2", id: "two", className: "" },
  { value: "3", id: "three", className: "" },
  { value: "4", id: "four", className: "" },
  { value: "5", id: "five", className: "" },
  { value: "6", id: "six", className: "" },
  { value: "7", id: "seven", className: "" },
  { value: "8", id: "eight", className: "" },
  { value: "9", id: "nine", className: "" },
  { value: "0", id: "zero", className: "jumbo" },
  { value: "+", id: "add", className: "" },
  { value: "-", id: "subtract", className: "" },
  { value: ".", id: "decimal", className: "" }
];

const isOperator = /[*/+-.]/,
  endsWithOperator = /[*+-./]$/,
  leadingZero = /\b0+/g,
  constainsDecimal = /./g;

const reset = { input: "0", formula: "0" };

const Button = ({ onClick, value, className, id }) => (
  <button id={id} className={className} onClick={() => onClick(value)}>
    {" "}
    {value}{" "}
  </button>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = reset;
  }

  handleEqual = () => {
    let formula = this.state.formula;

    console.log(formula);

    if (formula.match(endsWithOperator)) {
      formula = "Error: Cannont end in Operator";
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

    if (value.match(isOperator) && formula.match(endsWithOperator)) {
      formula = formula.substring(0, formula.length - 1);
    }

    this.setState({ input: value, formula: formula + value });
  };

  render() {
    return (
      <div className="calculator">
        <div id="display" className="outputScreen">
          {" "}
          {this.state.formula}{" "}
        </div>
        <div className="formulaScreen">{this.state.input}</div>
        <div>
          <button id="clear" className="jumbo" onClick={this.handleClear}>
            AC
          </button>
          {buttons.map(button => (
            <Button
              id={button.id}
              key={button.id}
              onClick={this.handleButton}
              value={button.value}
              className={button.className}
            />
          ))}
          <button id="equals" onClick={this.handleEqual}>
            =
          </button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
