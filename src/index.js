import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import ReactDOM from "react-dom";
import React from "react";

import * as serviceWorker from "./serviceWorker";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import configureStore from "./redux/configureStore";
const store = configureStore();

ReactDOM.render(
  <ReduxProvider store={store}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </ReduxProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
