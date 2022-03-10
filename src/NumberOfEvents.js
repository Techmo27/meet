import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 32,
      errorText: null
    };
  }

  handleInputChanged = (event) => {
    let value = event.target.value;
    let cleanedValue = this.RemoveNonNumeric(value);

    if (value !== cleanedValue) {
      this.setState({
        number: cleanedValue,
        errorText: true
      })
    } else {
      this.setState({
        number: cleanedValue,
        errorText: false
      });
    }

    if (this.props.updateNumberOfEvents)
      this.props.updateNumberOfEvents(cleanedValue);

  }

  RemoveNonNumeric = (text) => {
    return text.replace(/[^0-9]/g, '');
  }


  render() {
    const { number, errorText } = this.state;
    const errorMessage = 'Number of Events must be a non-negative integer';
    return (
      <div className="events">
        {errorText && <ErrorAlert text={errorMessage} />}
        <div>
          <label>Number of Events:</label>
          <input value={this.state.number} onChange={this.handleInputChanged} />
        </div>
      </div>
    )
  }
}

export default NumberOfEvents;