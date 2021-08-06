import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideEventDetails.feature');

defineFeature(feature, test => {

  test('An event element is collapsed by default', ({ given, when, then }) => {
    given('The user is on main page', () => {

    });

    when('a user select and event', () => {

    });

    then('an element collapsed by default', () => {

    });
  });


  test('User can expand an event to see its details', ({ given, when, then }) => {
    given('user is seeing the events', () => {

    });

    when('a user choose and event and click on it', () => {

    });

    then('an element expand with details', () => {

    });
  });


  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    given('user user is seeing the events', () => {

    });

    when('a user click on the event details', () => {

    });

    then('the element details hide', () => {

    });
  });


});