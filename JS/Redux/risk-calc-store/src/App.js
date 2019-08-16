import React, { Component } from "react";
import WinCard from "./components/win-card.jsx";
import Button from "./components/button.jsx";
import InfoCard from "./components/info-card.jsx";
import Input from "./components/input.jsx";
import Title from "./components/title.jsx";
import History from "./components/history.jsx";

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
      win: false,
      history: []
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

  turn(state) {
    // function to take a state, run turn, and return an updated state
    const history = state.history;
    history.push(state);
    const newState = battle(state.Attack, state.Defense);
    newState["canChange"] = false;
    newState["history"] = history;
    return newState;
  }

  handleSubmit(event) {
    if (event) {
      event.preventDefault();
    }

    if (this.state.win) {
      alert("The battle is done!");
    } else if (this.state.Attack <= 1 || this.state.Defense == 0) {
      this.setState({ win: true, canChange: false });
    } else {
      this.setState(this.turn(this.state));
    }
  }

  handleSubmitToFinish() {
    if (this.state.win) {
      alert("The battle is done!");
      return;
    }

    let state = this.state;
    while (state.Attack > 1 && state.Defense > 0) {
      state = this.turn(state);
    }
    state["win"] = true;
    // setting canChange is a catch all for when the users presses the button
    //with 0 armies in both feilds, IE where the turn is never run
    state["canChange"] = false;
    this.setState(state);
  }

  handleReset() {
    this.setState({
      Attack: 0,
      Defense: 0,
      canChange: true,
      win: false,
      history: []
    });
  }

  handleUndo() {
    if (this.state.history.length > 0) {
      const history = this.state.history;
      const state = history.pop();
      state["history"] = history;
      if (this.state.win) {
        state["win"] = false;
      }
      this.setState(state);
    } else {
      alert("Nothing in the History");
    }
  }

  renderWin() {
    let winner = "";
    let remaining = 0;
    if (!this.state.win) {
      return;
    } else if (this.state.Defense == 0 && this.state.Attack > 0) {
      winner = "Attack";
      remaining = this.state.Attack;
    } else {
      winner = "Defense";
      remaining = this.state.Defense;
    }
    return (
      <div className="content card p-2 mt-2">
        <WinCard className="" winner={winner} remaining={remaining} />
      </div>
    );
  }

  renderInfo() {
    if (!this.state.canChange) {
      return (
        <div className="card content p-2 mt-2">
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
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="navbar-brand"> TEST </div>
        </nav>
        <div className="wrapper">
          <div className="container">
            <div className="card content p-2 mt-2">
              <Title className="card-title" value="Risk Calc" />

              <form className="list-group" onSubmit={this.handleSubmit}>
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
                <input
                  className="invisible"
                  style={{ height: "0px" }}
                  type="submit"
                />
              </form>
              <div className="btn-group">
                <Button
                  value={"Battle!"}
                  className="btn btn-primary"
                  onClick={() => this.handleSubmit()}
                />
                <Button
                  value={"Finish!"}
                  className="btn btn-secondary"
                  onClick={() => this.handleSubmitToFinish()}
                />
                <Button
                  value={"Reset"}
                  className="btn btn-danger"
                  onClick={() => this.handleReset()}
                />
                <Button
                  value={"Undo"}
                  className="btn btn-success"
                  onClick={() => this.handleUndo()}
                />
              </div>
            </div>
            {this.renderInfo()}
            {this.renderWin()}
          </div>
          <div className="container">
            <div className="card content p-2 mt-2">
              <History history={this.state.history} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

function attackDice(x) {
  let rng = seedrandom("added entropy.", { entropy: true });
  seedrandom(rng);
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
