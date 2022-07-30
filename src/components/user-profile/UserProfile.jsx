import React from "react";
import styles from "./user-profile.module.css";
export const UserProfile = () => {
  return (
    <section className={styles.user_profile_wrapper}>
      <div className={styles.profile_img}>
        <img
          src="https://bermuda-css.netlify.app/assets/avatar.png"
          alt="profile"
        />
      </div>
      <div className={styles.user_info}>
        <h4 className={styles.user_name}>Rishikesh Shinde</h4>
        <p className={styles.user_username}>@rdshinde</p>
        <button className={`btn btn-primary-outline ${styles.edit_profile_btn}`}>
          Edit Profile
        </button>
        <p className={styles.user_bio}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
          accusamus maiores aliquid numquam repellendus reiciendis, placeat
          eligendi dicta hic aliquam.
        </p>
        <p className={styles.user_website}>
          <a href="https://bermuda-css.netlify.app/">bermuda-css.netlify.app</a>
        </p>
        <div className={styles.user_stats}>
          <div className={styles.stat_wrapper}>
            <p>0</p>
            <p>Following</p>
          </div>
          <div className={styles.stat_wrapper}>
            <p>10</p>
            <p>Posts</p>
          </div>
          <div className={styles.stat_wrapper}>
            <p>1000</p>
            <p>Followers</p>
          </div>
        </div>
      </div>
    </section>
  );
};
