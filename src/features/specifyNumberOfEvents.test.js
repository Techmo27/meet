import { loadFeature, defineFeature } from "jest-cucumber";
import React from 'react';
import { mount } from 'enzyme';

import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When user hasn’t specified a number, 32 is the default number.', ({ given, when, then }) => {
    let AppWrapper;
    given('the user hasn’t specified how many events should be listed on a page', () => {
      AppWrapper = mount(<App />);
    });

    when('the user is on the main page', () => {
      AppWrapper.update();
    });

    then('32 events are listed on the page by default.', () => {
      expect(AppWrapper.find('.event')).toHaveLength(2);
    });

  });

  test('User can change the number of events they want to see.', ({ given, when, then }) => {
    let AppWrapper;
    given('the main page is open', () => {
      AppWrapper = mount(<App />);
    });

    when('they pass the number of events they want to be listed in the corresponding form', () => {
      AppWrapper.update();
      const eventObject = { target: { value: 1 } };
      AppWrapper.find('.number-of-events__input').simulate('change', eventObject);
    });
    then('they will be able to see the exact number of events listed at once.', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(1);
    });
  });

});