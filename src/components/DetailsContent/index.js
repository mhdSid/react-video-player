import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import Votes from "../Votes";
import styles from "./styles.scss";
import Sections from "../Sections";

const DetailsContent = (props) => {
  const { data } = props;
  const detailsContentClasses = cx(styles["details-content"]);
  const detailsPlotClasses = cx(styles["details-content-plot"]);
  const detailsContentInfoClasses = cx(styles["details-content-info"]);
  const detailsContentInfoItemClasses = cx(styles["details-content-info-num-item"]);

  return (
    <article className={detailsContentClasses}>
      <div className={detailsContentInfoClasses}>
        <Votes className={detailsContentInfoItemClasses} dark data={data.classification.name} />
        <Votes className={detailsContentInfoItemClasses} year dark data={data.year} />
        <Votes className={detailsContentInfoItemClasses} duration dark data={`${data.duration} minutes`} />
        <Votes className={detailsContentInfoItemClasses} country dark data={data.countries[0].name} />
        <Votes className={detailsContentInfoItemClasses} info dark data={`Original title: ${data.original_title}`} />
      </div>
      <p className={detailsPlotClasses}>{data.plot}</p>
      <Sections data={data} />
    </article>
  );
};

DetailsContent.propTypes = {
  data: PropTypes.object,
}

export default DetailsContent;