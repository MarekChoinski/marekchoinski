import React from "react";
import styles from "./Hero.module.scss";

export const Hero = () => (
  <header className={styles.hero}>
    <h1 className={styles.title}>Consquare</h1>
    <div className={styles.subtitle}>
      <span className={styles.pronunciation}>(/ˈkɑːsŋkɚ/) -</span>
      &nbsp;conquest of square
    </div>
  </header>
);
