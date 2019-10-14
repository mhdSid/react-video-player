import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.scss";
import useKeyOnly from "../../utils/useKeyOnly";

const Votes = (props) => {
  const { data: votes, dark, year, duration, country, info, className } = props;

  const votesClasses = cx(
    styles["app-slide-item-votes"],
    useKeyOnly(styles, dark, "dark"),
    useKeyOnly(styles, year, "year"),
    useKeyOnly(styles, duration, "duration"),
    useKeyOnly(styles, country, "country"),
    useKeyOnly(styles, info, "info"),
    className
  );

  return (
    <div className={votesClasses}>
      {votes}
    </div>
  );
};

Votes.propTypes = {
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  dark: PropTypes.bool,
  year: PropTypes.bool,
  duration: PropTypes.bool,
  country: PropTypes.bool,
  info: PropTypes.bool,
  className: PropTypes.string
};

export default Votes;
