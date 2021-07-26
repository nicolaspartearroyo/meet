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
    this.setState = { show: !this.state.show };
  };


  render() {
    return (
      <div className='event'>
        <li className='summary'>{this.state.summary}</li>
        <li className='location'>{this.state.location}</li>
        <li className='organizer'>{this.state.organizer}</li>
        <li className='date'>{this.state.date}</li>
        <li className='timeZone'>{this.state.timeZone}</li>
        {this.state.show === true && (
          <li className='details'>{this.state.description}</li>
        )}
        <button className='showMoreLess' onClick={() => this.handleButton()}>
        </button>
      </div>
    );
  };
};

export default Event;

