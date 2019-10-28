import React from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom"; // Redirect
import PropTypes from "prop-types";
import MainComponent from "../Browse";
import Details from "../Details";
import Player from "../../components/Player";

const Routes = () => (
  <BrowserRouter basename="/react-video-player/">
    <Route exact path="/browse" component={MainComponent} />
    <Route
      exact
      path="/:type(movies|trailers)/:id"
      component={Details}
    />
    <Route
      exact
      path="/streams/:type/:id/trailer"
      component={Player}
    />
    <Redirect to="/browse" />
  </BrowserRouter>
);

Routes.propTypes = {
  authenticated: PropTypes.bool,
  goTo: PropTypes.func,
};

export default Routes;
