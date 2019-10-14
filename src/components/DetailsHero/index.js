import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import Image from "../Image";
import Button from "../Button";
import Numbers from "../NumbersContainer";
import styles from "./styles.scss";

const DetailsHero = (props) => {
  const detailsHeroClasses = cx(styles["app-details-hero"]);
  const detailsoHeroContentClasses = cx(styles["app-details-hero-content"]);
  const detailsHeroTitleClasses = cx(styles["app-details-hero-title"]);
  const detailsHeroCircularBtnsClasses = cx(styles["app-details-hero-circular-btns"]);
  const { data } = props;

  return (
    <header className={detailsHeroClasses}>
      <Image big data={data.images.snapshot} />
      <div className={detailsoHeroContentClasses}>
        <div className={detailsHeroCircularBtnsClasses}>
          <Button circular text="TRAILER" />
          <Button circular text="ADD TO WISH LIST" />
        </div>
        <Numbers big data={data} />
        <h1 className={detailsHeroTitleClasses}>{data.title}</h1>
        <Button flexed text="WATCH NOW" data={data.order_options[0]} />
        <Button regular text="REDEEM VOUCHER" />
      </div>
    </header>
  );
};

DetailsHero.propTypes = {
  data: PropTypes.object,
}

export default DetailsHero;