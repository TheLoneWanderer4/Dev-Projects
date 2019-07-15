import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

const accurateInterval = require("accurate-interval");

const Counter = ({ id, onIncrement, onDecrement, label, value }) => (
  <div className="card m-2 align-items-center  ">
    <div id={id + "-label"} className="m-2 p-2">
      {label}
    </div>
    <div className="d-flex flex-row">
      <button
        id={id + "-increment"}
        className="btn btn-success m-2 p-2"
        onClick={onIncrement}
      >
        INC
      </button>
      <div id={id + "-length"} className="m-2 p-2">
        {value}
      </div>
      <button
        id={id + "-decrement"}
        className="btn btn-info m-2 p-2"
        onClick={onDecrement}
      >
        DEC
      </button>
    </div>
  </div>
);

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: props.session * 60,
      timerType: "Session",
      isRunning: false,
      intervalID: ""
    };
  }

  componentWillReceiveProps(props) {
    if (!this.state.isRunning) {
      this.setState({ time: props.session * 60 });
    }
  }

  playSound(e) {
    const sound = document.getElementById("beep");
    sound.currentTime = 0;
    sound.play();
    setTimeout(() => this.clockify(), 100);
  }

  clockify(time) {
    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return minutes + ":" + seconds;
  }

  decrementTimer() {
    if (this.state.isRunning) {
      this.setState({ time: this.state.time - 1 });
    }
  }

  pomodoro() {
    if (this.state.time <= 0) {
      this.playSound();
      if (this.state.timerType === "Session") {
        this.setState({ time: this.props.break * 60, timerType: "Break" });
      } else {
        this.setState({ time: this.props.session * 60, timerType: "Session" });
      }
    }
  }

  handleStartStop = () => {
    if (this.state.isRunning) {
      this.props.handleStartStop(false);
      this.setState({ isRunning: false });
      this.state.intervalID && this.state.intervalID.clear();
    } else {
      this.props.handleStartStop(true);
      this.setState({
        intervalID: accurateInterval(() => {
          this.decrementTimer();
          this.pomodoro();
        }, 1000),
        isRunning: true
      });
    }
  };

  handleReset = () => {
    this.props.handleStartStop(false);
    this.state.intervalID && this.state.intervalID.clear();
    this.props.handleReset();
    this.setState({
      time: this.props.session * 60,
      timerType: "Session",
      isRunning: false,
      intervalID: ""
    });
  };

  render() {
    return (
      <div className="card m-2 p-2 align-items-center  ">
        <audio className="clip" id="beep" src="https://goo.gl/65cBl1"></audio>
        <div id="timer-label" className="">
          {this.state.timerType}
        </div>
        <div id="time-left" className="">
          {this.clockify(this.state.time)}
        </div>
        <div className="btn-group">
          <button
            id="start_stop"
            className="btn btn-primary"
            onClick={this.handleStartStop}
          >
            Start
          </button>
          <button
            id="reset"
            className="btn btn-danger"
            onClick={this.handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { break: 5, session: 25, running: false };
  }

  handleIncrementBreak = () => {
    if (!this.state.running) {
      if (this.state.break < 60) {
        this.setState({ break: this.state.break + 1 });
      }
    }
  };

  handleIncrementSession = () => {
    if (!this.state.running) {
      if (this.state.session < 60) {
        this.setState({ session: this.state.session + 1 });
      }
    }
  };

  handleDecrementBreak = () => {
    if (!this.state.running) {
      if (this.state.break > 1) {
        this.setState({ break: this.state.break - 1 });
      }
    }
  };

  handleDecrementSession = () => {
    if (!this.state.running) {
      if (this.state.session > 1) {
        this.setState({ session: this.state.session - 1 });
      }
    }
  };

  handleReset = () => {
    this.setState({ break: 5, session: 25 });
  };

  handleStartStop = bool => {
    this.setState({ running: bool });
  };

  render() {
    return (
      <div>
        <div className="card   p-2 m-2 align-items-center">Clock</div>
        <div className="counters">
          <Counter
            id="break"
            onIncrement={this.handleIncrementBreak}
            onDecrement={this.handleDecrementBreak}
            label={"Break Length"}
            value={this.state.break}
          />
          <Counter
            id="session"
            onIncrement={this.handleIncrementSession}
            onDecrement={this.handleDecrementSession}
            label={"Session Length"}
            value={this.state.session}
          />
        </div>
        <Timer
          break={this.state.break}
          session={this.state.session}
          handleReset={this.handleReset}
          handleStartStop={this.handleStartStop}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
