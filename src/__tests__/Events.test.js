import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
  });
  test('Summary is render', () => {
    expect(EventWrapper.find('.summary')).toHaveLength(1);
  });
  test('Location is render', () => {
    expect(EventWrapper.find('.location')).toHaveLength(1);
  });
  test('Organizer is render', () => {
    expect(EventWrapper.find('.organizer')).toHaveLength(1);
  });
  test('Date is render', () => {
    expect(EventWrapper.find('.date')).toHaveLength(1);
  });
  test('Time is render', () => {
    expect(EventWrapper.find('.timeZone')).toHaveLength(1);
  });
  test('Show more/less button is render', () => {
    expect(EventWrapper.find('.showMoreLess')).toHaveLength(1);
  });
  test('Show details on click', () => {
    EventWrapper.setState({
      show: false,
    });
    EventWrapper.find('.showMoreLess').simulate('click');
    expect(EventWrapper.find('.showMoreLess')).toHaveLength(1);
  });
  test('Hide details on click', () => {
    EventWrapper.setState({
      show: true,
    });
    EventWrapper.find('.showMoreLess').simulate('click');
    expect(EventWrapper.find('.showMoreLess')).toHaveLength(1);
  });
});