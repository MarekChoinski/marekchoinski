import React from "react";
import styles from "./Header.module.scss";

export const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.introduction}>
      <span className={styles.greeter}>My name is </span>
      <span className={styles.name}>Marek Choiński</span>
    </h1>
    <nav className={styles.navbar}>
      <ul className={styles.links}>
        <li className={styles.item}>
          <a className={styles.link} href="#projects">
            projects
          </a>
        </li>
        <li className={styles.item}>
          <a
            className={styles.link}
            target="_blank"
            href="https://drive.google.com/file/d/18ViFq7b6cM7oGVwAWSbKlkEnR_RxcE85/view?usp=sharing"
          >
            resume
          </a>
        </li>
      </ul>
      <ul className={styles.links}>
        <li className={styles.item}>
          <a className={styles.link} href="https://github.com/marekchoinski">
            github
          </a>
        </li>
        <li className={styles.item}>
          <a
            className={styles.link}
            href="https://pl.linkedin.com/in/marek-choi%C5%84ski-506ab5180"
          >
            linkedin
          </a>
        </li>
      </ul>
    </nav>
  </header>
);
