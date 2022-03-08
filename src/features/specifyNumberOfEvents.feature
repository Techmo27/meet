Feature: SPECIFY NUMBER OF EVENTS

Scenario: When user hasn’t specified a number, 32 is the default number. 
Given the user hasn’t specified how many events should be listed on a page
When the user is on the main page
Then 32 events are listed on the page by default.

Scenario: User can change the number of events they want to see.
Given the main page is open 
When they pass the number of events they want to be listed in the corresponding form
Then they will be able to see the exact number of events listed at once.