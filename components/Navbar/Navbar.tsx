import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";

export const Navbar = () => (
  <nav className={styles.nav}>
    <Link href="/">
      <span className={styles.name}>Marek Choiński</span>
    </Link>
  </nav>
);
