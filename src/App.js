import React, { Component } from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from "./NumberOfEvents";

import WelcomeScreen from './WelcomeScreen';
import { getEvents, extractLocations, checkToken, getAccessToken } from
  './api';


import './App.css';
import './nprogress.css';


class App extends Component {
  state = {
    events: [],
    locations: [],
    currentLocation: 'all',
    numberOfEvents: 32,
    showWelcomeScreen: undefined,
  };

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false :
      true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }
  }


  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, numOfEvents) => {
    getEvents().then((events) => {
      let locationEvents;
      if (location === 'all' && numOfEvents === 0) {
        locationEvents = events
      } else if (location !== 'all' && numOfEvents === 0) {
        locationEvents = events.filter((event) => event.location === location);
      } else if (location === '' && numOfEvents > 0) {
        locationEvents = events.slice(0, numOfEvents);
      }
      this.setState({
        events: locationEvents,
        currentLocation: location,
        numberOfEvents: numOfEvents
      });
    });
  }

  updateNumberOfEvents = (number) => {
    const newNum = number;
    this.setState({
      numberOfEvents: newNum
    });
    this.updateEvents(this.state.currentLocation);
  };

  render() {
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />
    return (
      <div className="App">
        <h1>Meet App</h1>
        <h3>Choose a city</h3>
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents
          updateEvents={this.updateEvents}
          numberOfEvents={this.state.numberOfEvents}
        />
        <EventList
          events={this.state.events}
        />
        <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }}
        />

      </div>
    );
  }
}

export default App;