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
    numberOfEvents: '32',
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, this.state.numberOfEvents),
          locations: extractLocations(events),
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location = 'all', number = this.state.numberOfEvents) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events.slice(0, number) :
        events.filter((event) => event.location === location).slice(0, number);

      this.setState({
        events: locationEvents.slice(0, number),
        location
      });
    });
  }

  updateNumberOfEvents = (numberOfEvents) => {
    this.setState({
      numberOfEvents
    }, this.updateEvents(this.state.location, numberOfEvents));
  }

  render() {
    const { events, locations, numberOfEvents } = this.state;
    return (
      <div className="App">
        <div id="App__header">
          <h1>Meet App</h1>
        </div>
        <CitySearch locations={locations} numberOfEvents={numberOfEvents} updateEvents={this.updateEvents} />
        <NumberOfEvents updateNumberOfEvents={number => { this.updateNumberOfEvents(number) }} currentNumberOfEvents={events.length} />
        <EventList events={events} numberOfEvents={numberOfEvents} />
      </div >
    );
  }
}


export default App;