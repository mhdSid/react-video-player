import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.scss";
// import { Galactic } from "galactic";
// import Button from "../Button";
// import PlayerController from "../../services/PlayerController";
import PlayerControls from "./PlayerControls";

const Player = (props) => {
  // const { data } = props;
  // const [loading, setLoading] = useState(true);
  console.log("Player,", props);

  const playerClasses = cx(styles["app-player"]);

  return (
    <div className={playerClasses}>
      <div id="video" />
      <PlayerControls />
    </div>
  );
};

Player.propTypes = {
  data: PropTypes.object
};

export default Player;
