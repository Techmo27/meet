Feature: SHOW/HIDE AN EVENT'S DETAILS

Scenario: An event element is collapsed by default.
Given the main page is open
When nothing is clicked 
Then the event details stay collapsed.

Scenario: User can expand an event to see its details by clicking on event.
Given an event is collapsed
When the user clicks on a collapsed event 
Then the event details expand.

Scenario: User can collapse an event to hide its details. 
Given the event details are expanded
When the user clicks on an expanded event 
Then the event will collapse and the former form is restored.