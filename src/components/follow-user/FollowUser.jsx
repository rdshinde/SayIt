import styles from "./follow-user.module.css";
import React from "react";
import { useDispatch } from "react-redux";
import { followUser } from "../../store/user/user-actions";

export const FollowUser = ({ data: { user } }) => {
  const { _id, firstName, lastName, username } = user;
  const dispatch = useDispatch();
  const followHandler = () => {
    dispatch(followUser({ followUserId: _id }));
  };
  return (
    <div className={styles.user_info}>
      <div className={styles.user_profile}>
        <img
          src="https://bermuda-css.netlify.app/assets/avatar.png"
          alt="profile"
        />
      </div>
      <div className={styles.user_name_info}>
        <h4 className={styles.user_name}>
          {firstName} {lastName}
        </h4>
        <p className={styles.user_username}>@{username}</p>
      </div>
      <div className={styles.follow_btn}>
        <button className={`${styles.follow_btn} btn`} onClick={followHandler}>
          Follow +
        </button>
      </div>
    </div>
  );
};
