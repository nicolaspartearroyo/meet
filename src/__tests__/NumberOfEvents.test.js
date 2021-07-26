import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from "../NumberOfEvents";

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });
  test('render input', () => {
    expect(NumberOfEventsWrapper.find('.eventNum')).toHaveLength(1);
  });
  test('render 32 events by default', () => {
    expect(NumberOfEventsWrapper.find('.eventNum').prop('value')).toEqual(32);
  });
  test('renders input correctly', () => {
    const numberOfEvents = NumberOfEventsWrapper.state('numberOfEvents');
    expect(NumberOfEventsWrapper.find('.eventNum').prop('value')).toBe(numberOfEvents);
  });
  test('change state when number of event input changes', () => {
    NumberOfEventsWrapper.setState({
      numberOfEvents: "32",
    });
    const eventObject = { target: { value: '2' } };
    NumberOfEventsWrapper.find('.eventNum').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe('2');
  });

});