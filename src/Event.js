import React, { Component } from "react";

class Event extends Component {
  state = {
    show: false,

  };

  handleButton = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const event = this.props.event;

    return (
      <ul className="event">
        <li className="summary">{event.summary}</li>
        <li className="location">{event.location}</li>
        <li className="date">{event.start.dateTime}</li>
        <li className="timeZone">{event.start.timeZone}</li>
        {this.state.show === true && (
          <p className="details">{event.description}</p>
        )}
        {this.state.show === false && (
          <button className="showMore" onClick={() => this.handleButton()}>
            Show more
          </button>
        )}
        {this.state.show === true && (
          <button className="showLess" onClick={() => this.handleButton()}>
            Show less
          </button>
        )}
      </ul>
    );
  }
}
export default Event;