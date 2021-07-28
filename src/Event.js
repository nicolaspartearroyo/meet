import React, { Component } from "react";

class Event extends Component {
  state = {
    summary: "",
    description: "",
    location: "",
    date: "",
    timeZone: "",
    show: false,
  };

  handleButton = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };


  render() {
    return (
      <div className='event'>
        <p className='summary'>Event{this.state.summary}</p>
        <p className='location'>Location{this.state.location}</p>
        <p className='organizer'>Organizer{this.state.organizer}</p>
        <p className='date'>Date{this.state.date}</p>
        <p className='timeZone'>Time{this.state.timeZone}</p>
        {this.state.show === true && (
          <p className='details'>Details{this.state.description}</p>
        )}
        <button className='showMoreLess' onClick={() => this.handleButton()}>
          Show more/less</button>
      </div>
    );
  };
};

export default Event;

