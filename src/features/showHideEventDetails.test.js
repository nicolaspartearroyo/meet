import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import Event from '../Event';
import { mockData } from '../mock-Data';

const feature = loadFeature('./src/features/showHideEventDetails.feature');


defineFeature(feature, test => {
  let AppWrapper;
  let EventWrapper;

  test('An event element is collapsed by default', ({ given, when, then }) => {
    given('the user open the app', () => {
      AppWrapper = mount(<App />);
    });

    when('The user is on main page', () => {
    });

    then('an element collapsed by default', () => {
      AppWrapper.update();
      expect(AppWrapper.find(".description")).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    given('user is seeing the events', () => {
      EventWrapper = shallow(<Event event={mockData[1]} />);
    });
    when('a user choose and event and click on it', () => {
      EventWrapper.find(".showMore").simulate("click");
    });
    then('an element expand with details', () => {
      expect(EventWrapper.find(".details")).toHaveLength(1);
    });
  });


  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    given('user is seeing the events detail expanded', () => {
      EventWrapper = shallow(<Event event={mockData[1]} />);
      EventWrapper.setState({
        show: true,
      });
    });

    when('a user click on the event details', () => {
      EventWrapper.find(".showLess").simulate("click");
    });

    then('the element details hide', () => {
      expect(EventWrapper.find(".details")).toHaveLength(0);
    });
  });
});
