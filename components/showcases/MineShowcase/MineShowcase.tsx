import React from "react";
import styles from "./MineShowcase.module.scss";

export const MineShowcase = () => (
  <div className={styles.wrapper}>
    <video className={styles.mine} autoPlay loop muted playsInline>
      <source src="/videos/consquare/mine.mp4" type="video/mp4" />
    </video>
  </div>
);
