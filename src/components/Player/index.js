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
  const videoContainerClasses = cx(styles["app-video-container"]);
  return (
    <div className={playerClasses}>
      <div className={videoContainerClasses} id="video-player" />
      <PlayerControls {...props} />
    </div>
  );
};

Player.propTypes = {
  data: PropTypes.object
};

export default Player;
