import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function Title(props) {
  return (
    <h1 className="title" onClick={props.onClick}>
      {" "}
      {props.title}{" "}
    </h1>
  );
}

function Menu(props) {
  let status = props.status;
  let moves = props.moves;
  return (
    <div className="menuBar">
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
      <UndoButton onClick={props.undoClick} />
    </div>
  );
}

function UndoButton(props) {
  return (
    <button className="time-travel-button" onClick={props.onClick}>
      Undo
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div className="board">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      xIsNext: true,
      stepNumber: 0,
      menuExtend: false
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length
    });
  }

  handleTitleClick() {
    this.setState({ menuExtend: !this.state.menuExtend });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  undoClick() {
    if (this.state.stepNumber == 0) {
      return;
    }
    let step = this.state.stepNumber - 1;
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  renderMenu(i, status, moves) {
    if (i) {
      return (
        <Menu
          status={status}
          moves={moves}
          undoClick={() => this.undoClick()}
        />
      );
    }
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        <li>
          <button
            key={move}
            className="time-travel-button"
            onClick={() => this.jumpTo(move)}
          >
            {desc}
          </button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="app">
        {this.renderMenu(this.state.menuExtend, status, moves)}
        <div className="game">
          <Title
            className="title"
            title="Tic Tac Toe"
            onClick={() => this.handleTitleClick()}
          />
          <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
