import React from 'react';
import { loadFeature, defineFeature } from "jest-cucumber";
import { mount } from 'enzyme';

import App from '../App';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default.', ({ given, when, then }) => {
    let AppWrapper;
    given('the main page is open', () => {
      AppWrapper = mount(<App />);
    });

    when('nothing is clicked', () => {
      AppWrapper.update();
    });

    then('the event details stay collapsed.', () => {
      expect(AppWrapper.find('.extra-details')).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details by clicking on event.', ({ given, when, then }) => {
    let AppWrapper;
    given('an event is collapsed', () => {
      AppWrapper = mount(<App />);
    });

    when('the user clicks on a collapsed event', () => {
      AppWrapper.update();
      AppWrapper.find('.show-details').at(0).simulate('click');
    });

    then('the event details expand.', () => {
      expect(AppWrapper.find('.extra-details')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details.', ({ given, when, then }) => {
    let AppWrapper;
    given('the event details are expanded', () => {
      AppWrapper = mount(<App />);
    });

    when('the user clicks on an expanded event', () => {
      AppWrapper.update();
      AppWrapper.find('.show-details').at(0).simulate('click');
      AppWrapper.find('.hide-details').at(0).simulate('click');
    });

    then('the event will collapse and the former form is restored.', () => {
      expect(AppWrapper.find('.extra-details')).toHaveLength(0);
    });

  });

});