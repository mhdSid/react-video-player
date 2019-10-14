import React, { useState } from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import styles from "./styles.scss";
import useKeyOnly from "../../utils/useKeyOnly";

const Image = (props) => {
  const [url, setUrl] = useState("");
  const { data: _url, big } = props;

  const appImgClasses = cx(styles["app-image"], useKeyOnly(styles, big, "big"));
  const appImgLoadedClasses = cx(styles["app-img-loaded"]);

  const img = document.createElement("img");
  img.onload = () => {
    setUrl(_url);
  };
  img.src = _url;

  return (
    <>
      {big && (
        <div className={`${appImgClasses} ${url ? appImgLoadedClasses : ""}`} style={{ backgroundImage: `url(${url})` }} />
      )}
      {!big && (
        <img src={url} className={`${appImgClasses} ${url ? appImgLoadedClasses : ""}`} alt={url} />
      )}
    </>
  );
};

Image.propTypes = {
  data: PropTypes.string,
  big: PropTypes.bool
};

export default Image;
