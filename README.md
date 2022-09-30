In the project directory, you can run:

### `npm run`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### CORS Issue

The football-data api was throwing a CORS error while attempting to establish a connection. The workaround for this, was to pass it through heroku's cors as a proxy. CORS setting would usually be set up in the backend, but for the purposes of this assignment, I have implement the aofrementioned workaround. Please head to the URL below and request temporary access to the CORS demo server. This will allow you to run the search (or at least hit the endpoint and retrieve some team data)

https://cors-anywhere.herokuapp.com/corsdemo


