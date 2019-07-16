import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

const accurateInterval = require("accurate-interval");

const startState = {
  break: 5,
  session: 25,
  timerType: "Session",
  isRunning: false,
  timer: 1500,
  intervalFunction: "",
  sound: ""
};

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

class TimerApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = startState;
  }

  handleIncrementBreak = () => {
    if (!this.state.isRunning) {
      if (this.state.break < 60) {
        this.setState({ break: this.state.break + 1 });
      }
    }
  };

  handleIncrementSession = () => {
    if (!this.state.isRunning) {
      if (this.state.session < 60) {
        this.setState({
          session: this.state.session + 1,
          timer: this.state.timer + 60
        });
      }
    }
  };

  handleDecrementBreak = () => {
    if (!this.state.isRunning) {
      if (this.state.break > 1) {
        this.setState({ break: this.state.break - 1 });
      }
    }
  };

  handleDecrementSession = () => {
    if (!this.state.isRunning) {
      if (this.state.session > 1) {
        this.setState({
          session: this.state.session - 1,
          timer: this.state.timer - 60
        });
      }
    }
  };

  startTimer() {
    this.setState({
      intervalFunction: accurateInterval(() => {
        this.decrementTimer();
        this.pomodoro();
      }, 1000)
    });
  }

  endTimer() {
    this.state.intervalFunction.clear();
  }

  playSound(e) {
    this.audioBeep.play();
  }

  stopSound() {
    this.audioBeep.pause();
    this.audioBeep.currentTime = 0;
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
      this.setState({ timer: this.state.timer - 1 });
    }
  }

  pomodoro() {
    if (this.state.timer < 0) {
      this.playSound();
      if (this.state.timerType === "Session") {
        this.setState({ timer: this.state.break * 60, timerType: "Break" });
      } else {
        this.setState({ timer: this.state.session * 60, timerType: "Session" });
      }
    }
  }

  handleStartStop = () => {
    if (this.state.isRunning) {
      this.setState({ isRunning: false });
      this.endTimer();
    } else {
      this.startTimer();
      this.setState({ isRunning: true });
    }
  };

  handleReset = () => {
    if (this.state.isRunning) {
      this.endTimer();
    }
    this.stopSound();
    this.setState(startState);
  };

  render() {
    return (
      <div className="bg-light shadow p-4 card">
        <div className="card p-2 m-2 align-items-center">Clock</div>
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
        <div className="card m-2 p-2 align-items-center  ">
          <audio
            id="beep"
            preload="auto"
            src="https://goo.gl/65cBl1"
            ref={audio => {
              this.audioBeep = audio;
            }}
          />
          <div id="timer-label" className="">
            {this.state.timerType}
          </div>
          <div id="time-left" className="">
            {this.clockify(this.state.timer)}
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
      </div>
    );
  }
}

ReactDOM.render(<TimerApp />, document.getElementById("root"));
