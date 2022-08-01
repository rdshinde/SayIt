import styles from "./follow-user.module.css";
import React from "react";

export const FollowUser = () => {
  return (
    <div className={styles.user_info}>
      <div className={styles.user_profile}>
        <img
          src="https://bermuda-css.netlify.app/assets/avatar.png"
          alt="profile"
        />
      </div>
      <div className={styles.user_name_info}>
        <h4 className={styles.user_name}>Rishikesh Shinde</h4>
        <p className={styles.user_username}>@rdshinde</p>
      </div>
      <div className={styles.follow_btn}>
        <button className={`${styles.follow_btn} btn`}>Follow + </button>
      </div>
    </div>
  );
};
