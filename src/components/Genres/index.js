import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import Button from "../Button";
import styles from "./styles.scss";
import sharedStyles from "../LanguageSubtitles/styles.scss";

const Genres = (props) => {
  const { data } = props;

  const detailsContentGenresClasses = cx(sharedStyles["details-content-genres"]);
  const detailsHeroCircularBtnsClasses = cx(styles["details-content-genres-btns"]);
  const sectionTitleClasses = cx(sharedStyles["section-title"]);

  return (
    <div className={detailsContentGenresClasses}>
      <h3 className={sectionTitleClasses}>Genres</h3>
      <div className={detailsHeroCircularBtnsClasses}>
        {
          data.map(genre => (
            <Button key={genre.name} text={genre.name} genre circular />
          ))
        }
      </div>
    </div>
  );
};

Genres.propTypes = {
  data: PropTypes.array
};

export default Genres;
