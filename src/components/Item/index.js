import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.scss";
import Image from "../Image";
import Numbers from "../NumbersContainer";

const Item = (props) => {
  const slideItemClasses = cx(styles["app-slide-item"], "swiper-slide");

  const { data } = props;

  return (
    <Link to={`/${data.type}/hellboy-2019`} key={data.id} className={slideItemClasses}>{/* ${data.id} */}
      <Image data={data.photo || data.images.artwork} />
      <Numbers data={data} />
    </Link>
  );
};

Item.propTypes = {
  data: PropTypes.object
};

export default Item;
