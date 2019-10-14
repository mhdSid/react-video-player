import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.scss";

const LanguageSubtitles = (props) => {
  const { data } = props;

  const languageSubtitlesClasses = cx(styles["details-content-subtitles"]);
  const sectionTitleClasses = cx(styles["section-title"]);

  return (
    <div className={languageSubtitlesClasses}>
      <h3 className={sectionTitleClasses}>Language and subtitles</h3>
      <span>
        <h4>Audio</h4>
        <h4>{data.audio_languages[0].name}</h4>
      </span>
      <span>
        <h4>Subtitles</h4>
        <h4>{data.subtitle_languages[0].name}</h4>
      </span>
    </div>
  );
};

LanguageSubtitles.propTypes = {
  data: PropTypes.object
};

export default LanguageSubtitles;
