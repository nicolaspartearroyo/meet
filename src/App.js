import React, { Component } from 'react';
import './App.css';
import './EventList';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import WelcomeScreen from './WelcomeScreen';

import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import { WarningAlert } from './Alert';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    showWelcomeScreen: undefined,
    infoText: ""
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            events: events.slice(0, this.state.numberOfEvents),
            locations: extractLocations(events)
          });
        }
      });
      if (!navigator.onLine) {
        this.setState({
          infoText:
            "No Internet Connection",
        });
      } else {
        this.setState({
          infoText: "",
        });
      }
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      const { numberOfEvents } = this.state;
      this.setState({
        events: locationEvents.slice(0, numberOfEvents)
      });
    });
  }

  updateEventCount = (eventCount) => {
    const { currentLocation } = this.state;
    this.setState({
      numberOfEvents: eventCount
    });
    this.updateEvents(currentLocation, eventCount);
  }

  render() {
    if (this.state.showWelcomeScreen)
      return (
        <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken();
          }}
        />
      ); const { numberOfEvents } = this.state;
    return (
      <div className="App">
        <h1>Meet App</h1>
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={numberOfEvents} updateEventCount={this.updateEventCount} />
        <WarningAlert text={this.state.infoText} className="InfoAlert" />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;