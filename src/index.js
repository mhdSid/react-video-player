import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "./redux/store";
import "sanitize.css/sanitize.css";
import "./assets/styles/index.scss";
import App from "./containers/App";

const provider = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

const root = document.getElementById("root");

render(provider, root);
