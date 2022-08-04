import { useSelector } from "react-redux";
import React from "react";

import styles from "./page-layout.module.css";
import {
  AuthFormModal,
  EditProfile,
  Header,
  SearchFollowAside,
  Sidebar,
} from "../../components";

export const PageLayout = ({ children }) => {
  const { isModalVisible, modalName } = useSelector((state) => state.modal);

  const showModalHandler = () => {
    if (isModalVisible) {
      switch (modalName) {
        case "auth-form":
          return <AuthFormModal />;
        case "edit-profile":
          return <EditProfile />;
        default:
          return "";
      }
    }
  };

  return (
    <div
      className={`${styles.page_wrapper} ${
        isModalVisible ? styles.page_backdrop : ""
      }`}
    >
     
      {showModalHandler()}
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
