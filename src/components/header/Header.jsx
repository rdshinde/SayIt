import styles from "./header.module.css";
import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <section className={styles.header_wrapper}>
      <Link to={"/"} className={styles.header_link}>
        <h1>
          Say<span className={styles.title_subsection}>It</span>
        </h1>
      </Link>
    </section>
  );
};
