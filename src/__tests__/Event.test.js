import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<EventList /> component', () => {
  let EventWrapper;

  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[1]} />);
  });

  test('render an event', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  })

  test('render a location', () => {
    expect(EventWrapper.find('.location')).toHaveLength(1);
  })

  test('render a summary', () => {
    expect(EventWrapper.find('.summary')).toHaveLength(1);
  })

  test('render a show details button', () => {
    expect(EventWrapper.find('.show-details')).toHaveLength(1);
  });

  test('open details when the button is clicked', () => {
    EventWrapper.setState({
      collapsed: true
    });
    EventWrapper.find('.show-details').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(false);
  });

  test('hide details when the button is clicked', () => {
    EventWrapper.setState({
      collapsed: false
    });
    EventWrapper.find('.hide-details').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(true);
  });


});