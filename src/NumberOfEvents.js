import React, { Component } from "react";
import { ErrorAlert } from "./Alert.js";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    infoText: '',
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value });
    this.props.updateEventCount(event.target.value);
    if (numberOfEvents.length <= 0) {
      this.setState({
        infoText: 'Select a number from 1 to 32.'
      });
    } else {
      return this.setState({
        infoText: ''
      });
    }
  };


  render() {
    return (
      <div className="NumberOfEvents">
        <ErrorAlert text={this.state.infoText} />
        <input
          type="number"
          className="eventNum"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    )
  }
};

export default NumberOfEvents
