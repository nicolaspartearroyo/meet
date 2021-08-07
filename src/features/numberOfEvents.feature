Feature: Specify number of events

Scenario: When user hasn’t specified a number, 32 is the default number 
Given user open the app
When user look for an event
Then thirty two events max will be shown

Scenario: User can change the number of events they want to see 
Given user open the app
When user change the number of events
Then number of events will change