Feature: Show/Hide event's details

Scenario: An event element is collapsed by default 
Given The user is on main page
When a user select and event
Then an element collapsed by default

Scenario: User can expand an event to see its details 
Given user is seeing the events
When a user choose and event and click on it 
Then an element expand with details

Scenario: User can collapse an event to hide its details 
Given user user is seeing the events
When a user click on the event details
Then the element details hide