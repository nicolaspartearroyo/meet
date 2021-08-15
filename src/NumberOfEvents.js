import React, { Component } from "react";
import { ErrorAlert } from "./Alert.js";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    infoText: '',
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.props.updateEventCount(event.target.value);
    if (value <= 0 || value > 32) {
      this.setState({
        infoText: 'Select a number from 1 to 32.',
        numberOfEvents: ''
      })
    } else {
      return this.setState({
        numberOfEvents: value,
        infoText: ''
      });
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
