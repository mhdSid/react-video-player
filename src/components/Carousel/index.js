import React, { useEffect } from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import Swiper from "swiper";
import styles from "./styles.scss";
import Item from "../Item";

const Carousel = (props) => {
  const { data, type } = props;

  const swiperContainerClasses = cx(styles["app-swiper-container"], "swiper-container");
  const swiperTitleClasses = cx(styles["app-swiper-title"]);
  const sectionClasses = cx(styles["app-swiper-section"], styles[type]);
  const swiperBtnPrevClasses = `${cx(styles["app-swiper-btn"])} swiper-button-prev`;
  const swiperBtnNextClasses = `${cx(styles["app-swiper-btn"])} swiper-button-next`;

  useEffect(() => {
    const mySwiper = new Swiper(".swiper-container", {
      paginationType: "bullets",
      autoplayStopOnLast: false,
      effect: "slide",
      speed: 250,
      initialSlide: 0,
      spaceBetween: 2,
      autoHeight: false,
      slidesPerView: "auto",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
    });
    console.log(mySwiper);
  });

  return (
    <div className={sectionClasses} key={data.id}>
      <h3 className={swiperTitleClasses}>{data.name}</h3>
      <div className={swiperContainerClasses}>
        <div className="swiper-wrapper">
          {
            data.contents.data.map(item => (
              <Item key={item.id} data={item} />
            ))
          }
        </div>
        <div className={swiperBtnPrevClasses} />
        <div className={swiperBtnNextClasses} />
      </div>
    </div>
  );
};

Carousel.propTypes = {
  data: PropTypes.object,
  type: PropTypes.string
};

export default Carousel;
