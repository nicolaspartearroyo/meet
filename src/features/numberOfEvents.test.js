import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import NumberOfEvents from "../NumberOfEvents";
import { mockData } from '../mock-Data';

const feature = loadFeature('./src/features/numberOfEvents.feature');

defineFeature(feature, test => {
  const NumberOfEventsWrapper = mount(<NumberOfEvents />);

  test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
    given('user open the app', () => {
      AppWrapper = mount(<App />);
    });

    when('user look for an event', () => {
    });

    then('thirty two events will be shown', () => {
      expect(NumberOfEventsWrapper.state('numberOfEvents').lenght).toBe(32);
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    given('user open the app', () => {
      AppWrapper = mount(<App />);
    });

    when('user change the number of events', () => {
    });
    NumberOfEventsWrapper.find('.eventNum').simulate('change', { target: { value: 1 } });

    then('number of events will change', () => {
      expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(1);
    });
  });


});