import React, { Component } from "react";
import { ErrorAlert } from "./Alert.js";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    infoText: '',
  }

  handleInputChanged = (event) => {
    if (event.target.value === '') {
      return;
    }
    const value = parseInt(event.target.value, 10);
    // this.props.updateEventCount(event.target.value);
    if (value <= 0 || value > 32) {
      this.setState({
        infoText: 'Select a number from 1 to 32.'
      });
      return;
    }
    this.setState({
      numberOfEvents: value,
      infoText: ''
    });
    this.props.updateEvents(event.target.value);
  }


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
