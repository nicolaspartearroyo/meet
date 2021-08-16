import React, { Component } from "react";
import { ErrorAlert } from "./Alert.js";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    infoText: '',
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value < 1) {
      return this.setState({
        numberOfEvents: '',
        infoText: 'Please choose a number between 1 and 32',
      });
    } else if (value > 32) {
      return this.setState({
        numberOfEvents: '',
        infoText: 'Please choose a number smaller than 32',
      });
    } else {
      this.setState({
        numberOfEvents: value,
        infoText: '',
      });
      this.props.updateEvents('', value);
    }
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <p>Number of Events</p>
        <input
          type="number"
          className="eventNum"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
        <ErrorAlert text={this.state.infoText} />
      </div>
    )
  }
};

export default NumberOfEvents
