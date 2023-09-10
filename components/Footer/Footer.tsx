import React from "react";
import styles from "./Footer.module.scss";

export const Footer = () => (
  <footer className={styles.footer}>
    Hey! This page was also made by me! I used typescript, scss and
    gatsby.js,&nbsp;
    <a
      href="https://github.com/MarekChoinski/marekchoinski"
      className={styles.link}
    >
      you can check code here.
    </a>
  </footer>
);
