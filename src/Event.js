import React, { Component } from "react";
import Button from 'react-bootstrap/button';

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
          <Button variant="dark" className="showMore" onClick={() => this.handleButton()}>
            Show more
          </Button>
        )}
        {this.state.show === true && (
          <Button variant="secondary" className="showLess" onClick={() => this.handleButton()}>
            Show less
          </Button>
        )}
      </ul>
    );
  }
}

export default Event;