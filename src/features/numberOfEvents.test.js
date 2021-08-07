import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import Event from '../Event';
import NumberOfEvents from "../NumberOfEvents";
import { mockData } from '../mock-Data';

const feature = loadFeature('./src/features/numberOfEvents.feature');

defineFeature(feature, test => {
  let AppWrapper;
  let NumberOfEventWrapper;

  test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
    given('user open the app', () => {
      AppWrapper = mount(<App />);
    });

    when('user look for an event', () => {
    });

    then('thirty two events max will be shown', () => {
      expect(AppWrapper.state("events").length).toBe(mockData.length);
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    given('user open the app', () => {
      AppWrapper = mount(<App />);
    });

    when('user change the number of events', () => {
    });
    AppWrapper.find('.eventNum').simulate('change', { target: { value: '1' } });

    then('number of events will change', () => {
      AppWrapper.update();
      expect(AppWrapper.state("events").length).toBe(1);
    });
  });


});