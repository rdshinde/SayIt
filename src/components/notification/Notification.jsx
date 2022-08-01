import styles from "./notification.module.css";
import React from "react";
import { Post } from "../post/Post";
import { AiFillHeart } from "../../services";
export const Notification = () => {
  return (
    <div className={styles.notification_wrapper}>
      <div className={styles.notification_icon}>
        <AiFillHeart size={50} title={`Liked`} />
      </div>
      <article>
        <div className={styles.user_info}>
          <div className={styles.user_img}>
            <img
              src="https://bermuda-css.netlify.app/assets/avatar.png"
              alt="profile"
            />
          </div>
          <div>
            <div>
              <h4 className={styles.user_name}>Rishikesh Shinde</h4>
              <span className={styles.user_username}>@rdshinde</span>
              <span className={styles.timestamp}>1 min ago</span>
            </div>

            <p className={styles.message}>Liked your post.</p>
          </div>
        </div>
        <div className={styles.post_container}>
          <Post />
        </div>
      </article>
    </div>
  );
};
