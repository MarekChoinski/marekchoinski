import React from "react";
// import PostujLight from "../../assets/images/postuj_light.jpg";
// import PostujBlue from "../../assets/images/postuj_blue.jpg";
// import PostujDark from "../../assets/images/postuj_dark.jpg";
import styles from "./PostujSlider.module.scss";

export const PostujSlider = () => (
  <div className={styles.slider}>
    <img
      src="/images/postuj_light.jpg"
      alt="Light Postuj theme"
      className={styles.slideLight}
    />
    <img
      src="/images/postuj_blue.jpg"
      alt="Blue Postuj theme"
      className={styles.slideBlue}
    />
    <img
      src="/images/postuj_dark.jpg"
      alt="Dark Postuj theme"
      className={styles.slideDark}
    />
  </div>
);
