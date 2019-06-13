import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

var seedrandom = require("seedrandom");

function Win(props) {
  return (
    <div className="win-message">
      {props.winner} won with {props.remaining} armies left.
    </div>
  );
}

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Attack: 0, Defense: 0, canChange: true, win: false };

    this.handleChangeAttack = this.handleChangeAttack.bind(this);
    this.handleChangeDefense = this.handleChangeDefense.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeAttack(event) {
    if (this.state.canChange) {
      this.setState({ Attack: parseInt(event.target.value) });
    }
    console.log(event.target.value);
    console.log(this.state.Attack);
    console.log("");
  }

  handleChangeDefense(event) {
    if (this.state.canChange) {
      this.setState({ Defense: parseInt(event.target.value) });
    }
    console.log(event.target.value);
    console.log(this.state.Defense);
    console.log("");
  }

  logic() {
    if (this.state.win) {
      return;
    } else if (this.state.Attack == 1 || parseInt(this.state.Defense) === 0) {
      this.setState({ win: true });
      return;
    }
    this.setState(battle(this.state.Attack, this.state.Defense));
  }

  handleSubmit(event) {
    this.logic();
    this.setState({
      canChange: false
    });
    event.preventDefault();
  }

  renderWin() {
    let winner = "";
    let remaining = 0;
    if (this.state.Defense == 0) {
      winner = "Attack";
      remaining = this.state.Attack;
    } else {
      winner = "Defense";
      remaining = this.state.Defense;
    }
    if (this.state.win) {
      return <Win winner={winner} remaining={remaining} />;
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <label className="form-element">
          Attack:
          <input
            type="number"
            value={this.state.Attack}
            onChange={this.handleChangeAttack}
          />
        </label>
        <label className="form-element">
          Defense:
          <input
            type="number"
            value={this.state.Defense}
            onChange={this.handleChangeDefense}
          />
        </label>
        <input className="submit" type="submit" value="Submit" />
        {this.renderWin()}
      </form>
    );
  }
}

ReactDOM.render(<FormComponent />, document.getElementById("root"));

function attackDice(x) {
  if (x > 3) {
    return 3;
  } else if (x == 3) {
    return 2;
  } else if (x == 2) {
    return 1;
  } else {
    return 0;
  }
}
function defDice(x) {
  Math.round(Math.random() * 6);
  if (x >= 2) {
    return 2;
  } else if (x > 0) {
    return 1;
  } else {
    return 0;
  }
}
function combat(x) {
  let ret = 0;
  let hold = 0;
  for (let i = 0; i < x; i++) {
    hold = Math.round(Math.random() * 6);
    if (hold > ret) {
      ret = hold;
    }
  }
  return ret;
}
function attack(x) {
  let dice = attackDice(x);
  return combat(dice);
}
function defense(x) {
  let dice = defDice(x);
  console.log(dice);
  return combat(dice);
}

function battle(armiesAttack, armiesDefend) {
  let attackRoll = attack(parseInt(armiesAttack));
  let defendRoll = defense(parseInt(armiesDefend));
  if (defendRoll >= attackRoll) {
    armiesAttack -= 1;
  } else {
    armiesDefend -= 1;
  }
  alert(`Attack rolled ${attackRoll} \n Defense rolled ${defendRoll}`);
  return { Attack: armiesAttack, Defense: armiesDefend };
}
