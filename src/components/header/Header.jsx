import styles from "./header.module.css";
import React from "react";

export const Header = () => {
  return (
    <section className={styles.header_wrapper}>
      <h1>
        Say<span className={styles.title_subsection}>It</span>
      </h1>
    </section>
  );
};
