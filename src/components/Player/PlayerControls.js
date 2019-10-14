import React, { useState, useEffect } from "react"; // { useState, useEffect }
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.scss";
import Button from "../Button";
import PlayerController from "../../services/PlayerController";
import useKeyOnly from "../../utils/useKeyOnly";
import getDuration from "../../utils/getDuration";

const PlayerControls = () => {
  const [duration, setDuration] = useState(null);
  const [loading, setLoading] = useState(null);
  const [playing, setPlaying] = useState(null);
  const [progress, setProgress] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const [buffer, setBuffer] = useState(null);
  let enabled;
  // const [enabled, setEanbled] = useState(false);
  // let autoPlayRef;

  const handlePlayerControl = () => {
    PlayerController.playPause();
  };

  const controlsClasses = cx(
    styles["app-player-controls"],
    // useKeyOnly(styles, actionsVisible, "visible")
  );
  const progressContainerClasses = cx(styles["progress-container"]);
  const progressBarClasses = cx(styles["progress-bar"]);
  const controlsBtnsClasses = cx(styles["progress-controls-btns"]);
  const progressTimeClasses = cx(styles["progress-time"]);
  const progressBufferClasses = cx(styles["progress-buffer"]);
  const playerLoadingClasses = cx(
    styles["app-player-loading"],
    useKeyOnly(styles, loading || playing === undefined, "visible")
  );

  console.log(playing, duration, currentTime, progress);

  PlayerController.init({
    setLoading: data => {
      setLoading(data);
    },
    setPlaying: data => {
      setPlaying(data);
    },
    setDuration: data => {
      setDuration(getDuration(data));
    },
    setProgress: data => {
      setProgress(data);
    },
    setCurrentTime: data => {
      setCurrentTime(getDuration(data / 1000));
    },
    setBuffer: data => {
      setBuffer(data);
    }
  });

  document.onfocus = () => {
    alert();
  };
  document.blur = () => {
    alert();
  };

  document.onmousemove = () => {
    window.focus();
    document.body.click();
    if (!enabled) {
      enabled = true;
      PlayerController.galactic.play();
      PlayerController.galactic.setAttribute("muted", false);
    }
    // else if (enabled && !PlayerController.galactic.audioTrackPlaying) {
    //   console.log("trying");
    //   PlayerController.galactic.setOptions({ playOnLoad: true });
    //   PlayerController.galactic.play();
    // }
    console.log(PlayerController.playing);
  };

  useEffect(() => {
    return () => {
      // if (!(enabled && !PlayerController.galactic.audioTrackPlaying)) {
      document.onmousemove = null;
      // }
    };
  });

  return (
    <>
      <Button className={playerLoadingClasses} circular loading />
      <div className={controlsClasses} onFocus={() => { }}>
        <div className={progressContainerClasses}>
          <div>{currentTime}</div>
          <div className={progressBarClasses}>
            <div className={progressTimeClasses} style={{ width: `${progress}%` }} />
            <div className={progressBufferClasses} style={{ width: `${buffer}%` }} />
          </div>
          <div>{duration}</div>
        </div>
        <div className={controlsBtnsClasses}>
          <Button onClick={handlePlayerControl} play mini circular playing={playing} />
        </div>
      </div>
    </>
  );
};

PlayerControls.propTypes = {
  loading: PropTypes.bool,
  playing: PropTypes.bool,
  duration: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  progress: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  buffer: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  currentTime: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
};

export default PlayerControls;
