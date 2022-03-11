import React, { Component } from "react";
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    errorText: '',
  }

  handleInputChanged = (event) => {
    const number = event.target.value;
    if (number < 1 || number > 32) {
      this.setState({
        numberOfEvents: '',
        errorText: 'Please enter a number between 1 and 32',
      })
    } else {
      this.setState({
        numberOfEvents: number,
        errorText: '',
      });
    }
    this.props.updateNumberOfEvents(event.target.value);
  };

  render() {
    return (
      <div className="numberOfEvents">
        <label>Number of Events: </label>
        <input
          type="number"
          className="number-of-events"
          value={this.state.numberOfEvents}
          onChange={(e) => this.handleInputChanged(e)}
        />
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;