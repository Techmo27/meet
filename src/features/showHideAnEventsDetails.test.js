import React from 'react';
import { loadFeature, defineFeature } from "jest-cucumber";
import { mount } from 'enzyme';

import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default.', ({ given, when, then }) => {
    let AppWrapper;
    given('the main page is open', () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
    });

    when('nothing is clicked', () => {

    });

    then('the event details stay collapsed.', () => {
      expect(AppWrapper.find('.event__more-details')).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details by clicking on event.', ({ given, when, then }) => {
    let AppWrapper;
    given('an event is collapsed', async () => {
      AppWrapper = await mount(<App />);
    });

    when('the user clicks on a collapsed event', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event__details-button')).toHaveLength(2);
      AppWrapper.find('.event__details-button').at(0).simulate('click');

    });

    then('the event details expand.', () => {
      expect(AppWrapper.find('.event__more-details')).toHaveLength(1);

    });
  });

  test('User can collapse an event to hide its details.', ({ given, when, then }) => {
    let AppWrapper;
    given('the event details are expanded', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      AppWrapper.find('.event__details-button').at(0).simulate('click');
      expect(AppWrapper.find(".event__more-details")).toHaveLength(1);
    });

    when('the user clicks on an expanded event', () => {
      AppWrapper.find('.event__details-button').at(0).simulate('click');
    });

    then('the event will collapse and the former form is restored.', () => {
      expect(AppWrapper.find('.event__more-details')).toHaveLength(0);
    });

  });

});