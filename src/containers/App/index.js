import React from "react";
import cx from "clsx";
import Routes from "./Routes";
import styles from "../../assets/styles/index.scss";

const portalRootClasses = cx(styles["app-root"]);

const App = () => (
  <div className={portalRootClasses}>
    <Routes />
  </div>
);

export default App;
