import styles from "./page-layout.module.css";
import React from "react";
import { FollowUser, Header, SearchFollowAside, Sidebar } from "../../components";

export const PageLayout = ({ children }) => {
  return (
    <div className={styles.page_wrapper}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.main_content}>{children}</div>
      <div className={styles.aside}>
        <SearchFollowAside />
      </div>
    </div>
  );
};
