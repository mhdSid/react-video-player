import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { createBrowserHistory as createHistory } from "history";
import { sections } from "./Sections/reducer";
import { details } from "./Details/reducer";
import { player } from "./Player/reducer";

export const history = createHistory();

const enhancers = [];

const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const rootReducer = combineReducers({
  router: connectRouter(history),
  sections,
  details,
  player
});

export default createStore(
  rootReducer,
  composedEnhancers
);
