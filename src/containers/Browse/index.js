import React from "react";
import cx from "clsx";
import Sections from "../../components/Sections";
import styles from "./styles.scss";
// import DataFetcher from "../../services/fetcher";

const MainComponent = () => {
  // DataFetcher.fetch().then((data) => {
  //   console.log(data);
  // });
  const browseClasses = cx(styles["app-browse"]);

  return (
    <div className={browseClasses}>
      <Sections />
    </div>
  );
};

export default MainComponent;