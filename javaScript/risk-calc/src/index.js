import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Attack: 0, Defense: 0, canChange: true };

    this.handleChangeAttack = this.handleChangeAttack.bind(this);
    this.handleChangeDefense = this.handleChangeDefense.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeAttack(event) {
    if (this.state.canChange) {
      this.setState({ Attack: parseInt(event.target.value) });
    }
  }

  handleChangeDefense(event) {
    if (this.state.canChange) {
      this.setState({ Defense: parseInt(event.target.value) });
    }
  }

  logic() {
    this.setState({
      Attack: this.state.Attack - 1,
      Defense: this.state.Defense - 1
    });
  }

  handleSubmit(event) {
    alert(this.logic());
    this.setState({
      canChange: false
    });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Attack:
          <input
            type="number"
            value={this.state.Attack}
            onChange={this.handleChangeAttack}
          />
        </label>
        <label>
          Defense:
          <input
            type="number"
            value={this.state.Defense}
            onChange={this.handleChangeDefense}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(<FormComponent />, document.getElementById("root"));
