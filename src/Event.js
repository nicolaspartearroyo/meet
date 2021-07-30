import React, { Component } from "react";

class Event extends Component {
  state = {
    show: false,
  };

  handleButton = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    let event = this.props.event;

    return (
      <div className="event">
        <h1 className="summary">{event.summary}</h1>
        <h2 className="location">{event.location}</h2>
        <h3 className="date">{event.start.dateTime}</h3>
        <h3 className="timeZone">{event.start.timeZone}</h3>
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
      </div>
    );
  }
}
export default Event;