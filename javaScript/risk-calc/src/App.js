import React, { Component } from "react";
import WinCard from "./components/win-card.jsx";
import Button from "./components/button.jsx";
import InfoCard from "./components/info-card.jsx";
import Input from "./components/input.jsx";
import Title from "./components/title.jsx";

var seedrandom = require("seedrandom");

class App extends Component {
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
      this.setState({ Attack: event.target.value });
    }
  }

  handleChangeDefense(event) {
    if (this.state.canChange && event.target.value >= 0) {
      this.setState({ Defense: event.target.value });
    }
  }

  handleSubmit(event) {
    if (this.state.win) {
      return;
    } else if (this.state.Attack <= 1 || this.state.Defense == 0) {
      this.setState({ win: true, canChange: false });
      return;
    }
    let holdState = battle(this.state.Attack, this.state.Defense);
    holdState["canChange"] = false;
    this.setState(holdState);
  }

  handleReset() {
    this.setState({
      Attack: 0,
      Defense: 0,
      canChange: true,
      win: false
    });
  }

  renderWin() {
    let winner = "";
    let remaining = 0;
    if (!this.state.win) {
      return;
    } else if (this.state.Attack == 0) {
      winner = "Defense";
      remaining = this.state.Defense;
    } else {
      winner = "Attack";
      remaining = this.state.Attack;
    }
    return (
      <div className="card content shadow p-2 m-2">
        <WinCard className="" winner={winner} remaining={remaining} />
      </div>
    );
  }

  renderInfo() {
    if (!this.state.canChange) {
      return (
        <div className="card content shadow p-2 m-2">
          <InfoCard
            className=""
            attack={this.state.AttackRoll}
            defense={this.state.DefenseRoll}
            winner={this.state.roundWinner}
          />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="container">
        <div className="card content shadow p-2">
          <Title className="card-titleWW" value="Risk Calc" />

          <form className="list-group">
            <Input
              className="list-group-item"
              label="Attack"
              value={this.state.Attack}
              onChange={this.handleChangeAttack}
            />
            <Input
              className="list-group-item"
              label="Defense"
              value={this.state.Defense}
              onChange={this.handleChangeDefense}
            />
          </form>
          <div className="btn-group">
            <Button
              value={"Battle!"}
              className="btn btn-primary"
              onClick={() => this.handleSubmit()}
            />
            <Button
              value={"Reset"}
              className="btn btn-danger"
              onClick={() => this.handleReset()}
            />
          </div>
        </div>
        {this.renderInfo()}
        {this.renderWin()}
      </div>
    );
  }
}

export default App;

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
