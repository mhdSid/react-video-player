import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.scss";
import Rating from "../Rating";
import Votes from "../Votes";
import useKeyOnly from "../../utils/useKeyOnly";

const Numbers = (props) => {
  const { data, big } = props;
  const movieNumbersClasses = cx(styles["app-item-numbers"], useKeyOnly(styles, big, "big"));
  const score = data.highlighted_score || (data.scores && data.scores[0]);

  return score ? (
    <div className={movieNumbersClasses}>
      {score.score && <Rating data={score.score} />}
      {score.formatted_amount_of_votes && <Votes data={score.formatted_amount_of_votes} />}
    </div>
  ) : null;
};

Numbers.propTypes = {
  data: PropTypes.object || PropTypes.any,
  big: PropTypes.bool
};

export default Numbers;
