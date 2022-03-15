import React, { Component } from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from "./NumberOfEvents";
import { getEvents, extractLocations } from './api';

import './App.css';
import './nprogress.css';


class App extends Component {
  state = {
    events: [],
    locations: [],
    currentLocation: 'all',
    numberOfEvents: 32,
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, numOfEvents) => {
    getEvents().then((events) => {
      let locationEvents;
      if(location === 'all' && numOfEvents === 0){
        locationEvents = events
      } else if(location !== 'all' && numOfEvents === 0){
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
      </div>
    );
  }
}

export default App;