import React, { Component } from "react";
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    infoText: '',
    errorText: ''
  };

  handleInputChanged = (event) => {
    const number = event.target.value;
    if (number <= 0 || number > 32) {
      this.setState({
        infoText: "Enter number between 1 and 32",
        errorText: ''
      });
    } else {
      this.setState({
        numberOfEvents: number,
        infoText: '',
        errorText: false
      });
    }
  };

  render() {
    const { numberOfEvents, errorText } = this.state;
    return (
      <div className="numberOfEvents">
        <label>Number of Events: </label>
        <input
          type="text"
          id="numberOfEvents__input"
          value={numberOfEvents}
          onChange={this.handleInputChanged}
        />
        {errorText && <ErrorAlert text={'Number of events must be smaller than 32'} />}
      </div>
    );
  }
}

export default NumberOfEvents;