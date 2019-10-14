import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.scss";

const Rating = (props) => {
  const starClasses = cx(styles["app-swiper-rating"], styles["app-dark-rating"]);
  const starsListClasses = cx(styles["app-swiper-rating-list"]);
  const ratingNumberClasses = cx(styles["app-swiper-rating-number"]);
  const { data: value } = props;

  return (
    <div className={starsListClasses}>
      <div className={starClasses} />
      <span className={ratingNumberClasses}>{value}</span>
    </div>
  );
};

Rating.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.any])
};

export default Rating;
