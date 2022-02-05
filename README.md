*The MeetUp App is a serverless, progressive web application (PWA) with React and a test-driven
development (TDD) technique. The application uses the Google Calendar API to fetch
upcoming events.*

**Key Features**

1. Filter events by city.
2. Show/hide event details.
3. Specify number of events.
4. Use the app when offline.
5. Add an app shortcut to the home screen.
6. View a chart showing the number of upcoming events by city.

**User Stories**

1. As a user, I would like to be able to filter events by city so that I can see the list of events
that take place in that city.
2. As a user, I would like to be able to show/hide event details so that I can see more/less
information about an event.
3. As a user, I would like to be able to specify the number of events I want to view in the
app so that I can see more or fewer events in the events list at once.
4. As a user, I would like to be able to use the app when offline so that I can see the events
I viewed the last time I was online.
5. As a user, I would like to be able to add the app shortcut to my home screen so that I
can open the app faster.
6. As a user, I would like to be able to see a chart showing the upcoming events in each
city so that I know what events are organized in which city.

**Technical Data**

● The app is a React application.
● The app is built using the TDD technique.
● The app uses the Google Calendar API and OAuth2 authentication flow.
● The app uses serverless functions (AWS lambda is preferred) for the authorization
server instead of using a traditional server.
● The app works on the latest versions of Chrome, Firefox, Safari, Edge, and Opera,
as well as on IE11.
● The app displays well on all screen sizes (including mobile and tablet) widths of
1920px and 320px.
● The app passes Lighthouse’s PWA checklist.
● The app works offline or in slow network conditions with the help of a service
worker.
● Users are able to install the app on desktop and add the app to their home screen
on mobile.
