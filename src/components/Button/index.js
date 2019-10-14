import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.scss";
import useKeyOnly from "../../utils/useKeyOnly";

const Button = (props) => {
  const {
    data,
    text,
    regular,
    flexed,
    circular,
    loading,
    playing,
    className,
    genre,
    play,
    mini,
    onClick
  } = props;

  // let playingClass = "";

  // if (playing) {
  //   playingClass = "playing";
  // } else {
  //   playingClass = "paused";
  // }

  // debugger;

  const appBtnClasses = cx(
    styles["app-btn"],
    useKeyOnly(styles, regular, "regular"),
    useKeyOnly(styles, flexed, "flexed"),
    useKeyOnly(styles, circular, "circular"),
    useKeyOnly(styles, play, "play"),
    useKeyOnly(styles, loading, "loading"),
    useKeyOnly(styles, mini, "mini"),
    useKeyOnly(styles, play && playing, "playing"),
    useKeyOnly(styles, play && !playing, "paused"),
    useKeyOnly(styles, genre, "genre"),
    className
  );
  const justifyEndClasses = cx(styles["align-end"]);

  return (
    <>
      {flexed && (
        <button className={appBtnClasses}>
          <span>{text}</span>
          <span className={justifyEndClasses}>
            <h4>from {data.price}</h4>
            <h6>or {data.points.cost}</h6>
          </span>
        </button>
      )}
      {circular && (
        <button onClick={onClick} className={appBtnClasses}>
          <h4>{text}</h4>
        </button>
      )}
      {regular && (
        <button className={appBtnClasses}>
          {text}
        </button>
      )}
    </>
  );
};

Button.propTypes = {
  data: PropTypes.object,
  text: PropTypes.string,
  regular: PropTypes.bool,
  flexed: PropTypes.bool,
  play: PropTypes.bool,
  circular: PropTypes.bool,
  loading: PropTypes.bool,
  playing: PropTypes.bool,
  genre: PropTypes.bool,
  mini: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default Button;