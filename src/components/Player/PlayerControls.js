import React, { useState, useEffect, createRef } from "react"; // { useState, useEffect }
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.scss";
import Button from "../Button";
import PlayerController from "../../services/PlayerController";
import useKeyOnly from "../../utils/useKeyOnly";
import getDuration from "../../utils/getDuration";

const PlayerControls = (props) => {
  const [duration, setDuration] = useState(null);
  const [loading, setLoading] = useState(true);
  const [playing, setPlaying] = useState(undefined);
  const [progress, setProgress] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const [buffer, setBuffer] = useState(null);
  const [mouseMovePosition, setMouseMovePosition] = useState(null);
  const [leftPosition, setLeftPosition] = useState(null);

  // let enabled;
  // const [enabled, setEanbled] = useState(false);
  // let autoPlayRef;

  const handlePlayerControl = () => {
    PlayerController.playPause();
  };
  const ref = createRef();

  const controlsClasses = cx(
    styles["app-player-controls"],
    // useKeyOnly(styles, actionsVisible, "visible")
  );
  const backBtnClasses = cx(styles["back-btn"]);
  const progressContainerClasses = cx(styles["progress-container"]);
  const progressBarClasses = cx(styles["progress-bar"]);
  const controlsBtnsClasses = cx(styles["progress-controls-btns"]);
  const progressTimeClasses = cx(styles["progress-time"]);
  const progressBufferClasses = cx(styles["progress-buffer"]);
  const playerLoadingClasses = cx(
    styles["app-player-loading"],
    useKeyOnly(styles, loading || playing === undefined, "visible")
  );
  const mouseMovePositionClasses = cx(styles["progress-mousemove-position"]);

  // console.log(playing, duration, currentTime, progress);

  const handleBack = () => {
    props.history.goBack();
  };

  // let percentage;

  // const doSeek = percentage => {
  //   console.log("seeking: ", percentage);
  //   // const position = (duration * percentage) / 100;
  //   PlayerController.setPosition(percentage);
  // };

  const seek = (e, floor) => {
    // console.log(e, "seek", ref);
    // if (e.target === this.streamIndicator.nativeElement) {
    //   return;
    // }
    const rect = ref.current.getBoundingClientRect();
    // console.log(rect);
    // let percentage = ""
    // if (this.locale === 'ar') {
    //   percentage = ((rect.width - clickEvent.clientX) / rect.width) * 100;
    // } else {
    const value = ((e.clientX) / (rect.width)) * 100;
    return floor ? Math.floor(value) - 11 : value;

    // console.log(percentage);
    // }
    // doSeek(percentage);
  };

  const setPosition = e => {
    // console.log("set position");
    const position = seek(e, true);
    PlayerController.setPosition(position);
  };

  const onMouseMove = e => {
    // console.log(e);
    const percentage = seek(e, true);
    const position = PlayerController.getMouseMovePosition(percentage);
    // console.log(getDuration(PlayerController.getMouseMovePosition(percentage)));
    if (position) {
      setMouseMovePosition(getDuration(position));
    }
    if (percentage) {
      setLeftPosition(seek(e));
    }
  };

  useEffect(() => {
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
    return () => {
      PlayerController.destroy();
    };
  }, []);

  return (
    <>
      <Button className={backBtnClasses} back onClick={handleBack} text="Back" />
      <Button className={playerLoadingClasses} circular loading />
      <div className={controlsClasses} onFocus={() => { }}>
        <div className={progressContainerClasses}>
          <div>{currentTime}</div>
          <div className={progressBarClasses} ref={ref} onClick={setPosition} onMouseMove={duration && onMouseMove}>
            {duration && <div className={mouseMovePositionClasses} style={{ left: `${leftPosition}%` }}>{mouseMovePosition}</div>}
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
  history: PropTypes.object
};

export default PlayerControls;
