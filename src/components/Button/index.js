import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.scss";
import useKeyOnly from "../../utils/useKeyOnly";
import { getElementType, getUnhandledProps, customPropTypes } from "../../utils";

const Button = (props) => {
  const {
    data,
    text,
    regular,
    flexed,
    circular,
    loading,
    playing,
    big,
    className,
    genre,
    back,
    play,
    mini,
    // onClick
  } = props;

  const rest = getUnhandledProps(Button, props);
  const ElementType = getElementType(Button, props);
  const justifyEndClasses = cx(styles["align-end"]);
  const appBtnClasses = cx(
    styles["app-btn"],
    useKeyOnly(styles, regular, "regular"),
    useKeyOnly(styles, flexed, "flexed"),
    useKeyOnly(styles, circular, "circular"),
    useKeyOnly(styles, play, "play"),
    useKeyOnly(styles, big, "big"),
    useKeyOnly(styles, back, "back"),
    useKeyOnly(styles, loading, "loading"),
    useKeyOnly(styles, mini, "mini"),
    useKeyOnly(styles, play && playing, "playing"),
    useKeyOnly(styles, play && !playing, "paused"),
    useKeyOnly(styles, genre, "genre"),
    className
  );

  return (
    <>
      {flexed && (
        <ElementType className={appBtnClasses} {...rest}>
          <span>{text}</span>
          <span className={justifyEndClasses}>
            <h4>from {data.price}</h4>
            <h6>or {data.points.cost}</h6>
          </span>
        </ElementType>
      )}
      {circular && (
        <ElementType className={appBtnClasses} {...rest}>
          <h4>{text}</h4>
        </ElementType>
      )}
      {regular || back && (
        <ElementType className={appBtnClasses} {...rest}>
          {text}
        </ElementType>
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
  big: PropTypes.bool,
  circular: PropTypes.bool,
  loading: PropTypes.bool,
  playing: PropTypes.bool,
  genre: PropTypes.bool,
  back: PropTypes.bool,
  mini: PropTypes.bool,
  // onClick: PropTypes.func,
  className: PropTypes.string,
  /** An element type to render as (string or function). */
  as: customPropTypes.as,
};

Button.defaultProps = {
  as: "button"
};

export default Button;