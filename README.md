## Run the development server

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\

## Libraries used

* ReactQuery for API calls and server state management
* TailwindCSS for styling

## Points to note:

* Use CORS whitelist extension as the backend is blocking requests from localhost clients. An easy get around for this
  is to
  use [this extension](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf)
  and toggle it on
* Requests are made via react query that handles caching and re-fetching of data. 
