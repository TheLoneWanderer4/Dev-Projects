import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
  }
];

const active = "pad-active shadow-sm bg-danger";
const inactive = "shadow-lg bg-primary";

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      padStyle: inactive
    };
  }

  componentWillMount() {
    document.addEventListener("keydown", this.keyPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyPress, false);
  }

  keyPress = event => {
    event.preventDefault();
    if (event.keyCode === this.props.keyCode) {
      this.playSound();
    }
  };

  activatePad = () => {
    if (this.state.padStyle === inactive) {
      this.setState({ padStyle: active });
    } else {
      this.setState({ padStyle: inactive });
    }
  };

  playSound = e => {
    const sound = document.getElementById(this.props.keyLabel);
    sound.currentTime = 0;
    sound.play();
    this.activatePad();
    setTimeout(() => this.activatePad(), 100);
    this.props.updateScreenText(this.props.clipId);
  };

  render() {
    return (
      <div
        id={this.props.clipId}
        onClick={this.playSound}
        className={"drum-pad text-white " + this.state.padStyle}
      >
        <audio
          className="clip"
          id={this.props.keyLabel}
          src={this.props.url}
        ></audio>
        {this.props.keyLabel}
      </div>
    );
  }
}

const DrumBank = ({ bank, power, updateScreenText }) => (
  <div className="pad-bank">
    {" "}
    {bank.map(pad => (
      <DrumPad
        id={pad.id}
        clipId={pad.id}
        url={pad.url}
        keyLabel={pad.keyTrigger}
        keyCode={pad.keyCode}
        updateScreenText={updateScreenText}
        power={power}
      />
    ))}
  </div>
);

const Display = ({ screenText }) => {
  return (
    <div id="display" className="display">
      <div className="info-screen card shadow bg-dark p-2">
        <div className="m-auto text-light">{screenText}</div>
      </div>
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bank: bankOne, screenText: "", power: true };
  }

  updateScreenText = text => {
    this.setState({ screenText: text });
  };

  render() {
    return (
      <div className="drum">
        <div id="drum-machine" className="container card flex-row shadow p-2">
          <DrumBank
            bank={this.state.bank}
            power={this.state.power}
            updateScreenText={this.updateScreenText}
          />
          <Display screenText={this.state.screenText} />
        </div>
      </div>
    );
  }
}

export default App;
