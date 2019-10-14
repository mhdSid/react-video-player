import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import cx from "clsx";
import styles from "./styles.scss";
import { getItemDetails } from "../../redux/Details/selectors";
import DetailsHero from "../../components/DetailsHero";
import DetailsContent from "../../components/DetailsContent";

const mapStateToProps = ({ details }) => ({
  details: details.details
});

const Details = (props) => {
  const detailsClasses = cx(styles["app-details"]);

  const { match, details } = props;
  const { id, type } = match.params;

  console.log(props, id, type, details);

  const item = getItemDetails({ details, id });

  return (
    <div className={detailsClasses}>
      <DetailsHero data={item} />
      <DetailsContent data={item} />
    </div>
  );
};

Details.propTypes = {
  match: PropTypes.object,
  details: PropTypes.array
}

export default connect(
  mapStateToProps
)(Details);