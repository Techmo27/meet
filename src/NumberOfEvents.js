import React, { Component } from "react";


class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    infoText: "",
  };

  handleInputChanged = (event) => {
    const number = event.target.value;
    if (number <= 0 || number > 32) {
      this.setState({
        infoText: "Enter number between 1 and 32",
      });
    } else {
      this.setState({
        numberOfEvents: number,
        infoText: "",
      });
    }
  };

  render() {
    const { numberOfEvents } = this.state;
    return (
      <div className="numberOfEvents">
        <label>Number of Events: </label>
        <input
          type="text"
          id="numberOfEvents__input"
          value={numberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;