import styles from "./follow-user.module.css";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unfollowUser } from "../../store/user/user-actions";

export const FollowUser = ({ data: { user } }) => {
  const { _id, firstName, lastName, username } = user;

  const dispatch = useDispatch();

  const followHandler = () => {
    if (isUserInFollowing()) {
      dispatch(unfollowUser({ followUserId: _id }));
    } else {
      dispatch(followUser({ followUserId: _id }));
    }
  };

  const following = useSelector((state) => state.users.following);

  const isUserInFollowing = () => {
    const user = following.find((user) => user.username === username);
    return user ? true : false;
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
        <p className={styles.user_username}>
          <Link to={`/profile/${username}`}> @{username} </Link>
        </p>
      </div>
      <div className={styles.follow_btn}>
        <button className={`${styles.follow_btn} btn`} onClick={followHandler}>
          {isUserInFollowing() ? (
            <span className="text-secondary">Unfollow</span>
          ) : (
            "Follow +"
          )}
        </button>
      </div>
    </div>
  );
};
