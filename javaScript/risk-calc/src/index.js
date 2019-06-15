import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { HashRouter, Route, Link } from "react-router-dom";

var seedrandom = require("seedrandom");

function Win(props) {
  return (
    <div className="win-message card">
      {props.winner} won with {props.remaining} armies left.
    </div>
  );
}

function Info(props) {
  return (
    <div className="card">
      Attack rolled : {props.attack}
      {" | "}
      Defense rolled : {props.defense}
      {"\n"}
      {props.winner} won this round.
    </div>
  );
}

function Reset(props) {
  return (
    <div className="reset card" onClick={props.onClick}>
      {" "}
      Reset{" "}
    </div>
  );
}

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Attack: 0,
      AttackRoll: 0,
      Defense: 0,
      DefenseRoll: 0,
      roundWinner: "",
      canChange: true,
      win: false
    };

    this.handleChangeAttack = this.handleChangeAttack.bind(this);
    this.handleChangeDefense = this.handleChangeDefense.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeAttack(event) {
    if (this.state.canChange && event.target.value >= 0) {
      this.setState({ Attack: parseInt(event.target.value) });
    }
  }

  handleChangeDefense(event) {
    if (this.state.canChange && event.target.value >= 0) {
      this.setState({ Defense: parseInt(event.target.value) });
    }
  }

  logic() {
    if (this.state.win) {
      return;
    } else if (this.state.Attack <= 1 || parseInt(this.state.Defense) === 0) {
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

  handleReset() {
    this.setState({
      Attack: 0,
      Defense: 0,
      canChange: true,
      win: false
    });
  }

  renderInfo() {
    if (!this.state.canChange) {
      return (
        <Info
          attack={this.state.AttackRoll}
          defense={this.state.DefenseRoll}
          winner={this.state.roundWinner}
        />
      );
    }
  }

  render() {
    return (
      <HashRouter basename="/">
        <form onSubmit={this.handleSubmit} className="form">
          <h1 className="card title"> Risk Calc </h1>
          <label className="form-element card">
            Attack:
            <input
              className="form-input"
              type="number"
              value={this.state.Attack}
              onChange={this.handleChangeAttack}
            />
          </label>
          <label className="form-element card">
            Defense:
            <input
              className="form-input"
              type="number"
              value={this.state.Defense}
              onChange={this.handleChangeDefense}
            />
          </label>
          <input className="submit card" type="submit" value="Submit" />
          {this.renderInfo()}
          {this.renderWin()}
          <Reset onClick={() => this.handleReset()} />
        </form>
      </HashRouter>
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
  let winner;
  if (defendRoll >= attackRoll) {
    armiesAttack -= 1;
    winner = "Defense";
  } else {
    armiesDefend -= 1;
    winner = "Attack";
  }
  return {
    Attack: armiesAttack,
    Defense: armiesDefend,
    AttackRoll: attackRoll,
    DefenseRoll: defendRoll,
    roundWinner: winner
  };
}
