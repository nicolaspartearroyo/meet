import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let event, EventWrapper;
  beforeAll(() => {
    event = mockData[0];
    EventWrapper = shallow(<Event event={event} />);
  });
  test('summary is render', () => {
    expect(EventWrapper.find('.summary')).toHaveLength(1);
  });
  test('location is render', () => {
    expect(EventWrapper.find('.location')).toHaveLength(1);
  });
  test('date is render', () => {
    expect(EventWrapper.find('.date')).toHaveLength(1);
  });
  test('time is render', () => {
    expect(EventWrapper.find('.timeZone')).toHaveLength(1);
  });
  test('Show details on click', () => {
    EventWrapper.setState({
      show: false,
    });
    EventWrapper.find('.showMore').simulate('click');
    expect(EventWrapper.find('.showMore')).toBeTruthy();
  });
  test('Hide details on click', () => {
    EventWrapper.setState({
      show: true,
    });
    EventWrapper.find('.showLess').simulate('click');
    expect(EventWrapper.find('.showLess')).toBeTruthy();
  });
});