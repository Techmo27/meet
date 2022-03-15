import React, { Component } from "react";
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: this.props.numberOfEvents,
    errorText: '',
  }

  handleInputChanged = (event) => {
    const number = event.target.value;
    if (number < 1 || number > 32) {
      this.setState({
        errorText: 'Please enter a number between 1 and 32',
      })
    } else {
      this.setState({
        numberOfEvents: number,
        errorText: '',
      });
      this.props.updateEvents("",number);
    }
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