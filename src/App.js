import React, { Component } from 'react';
import './App.css';
import './EventList';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberofEvents';

class App extends Component {
  render() {
    return (
      <div className="App">
        < CitySearch />
        < EventList />
        < NumberOfEvents />
      </div>
    );
  }
}

export default App;