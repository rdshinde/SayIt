import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  openModal,
  setModalData,
} from "../../store/modal-management/modal-slice";
import { followUser, unfollowUser } from "../../store/user/user-actions";
import styles from "./user-profile.module.css";
export const UserProfile = ({ data: { user, userPosts } }) => {
  const {
    _id,
    firstName,
    lastName,
    username,
    followers,
    following,
    bio,
    website,
  } = user;
  const totalPosts = userPosts?.length || 0;

  const currentUsername = useSelector((state) => state.users.currentUser);

  const isInFollowing = useSelector((state) =>
    state.users.following.some((user) => user.username === username)
  );

  const setProfileCtaBtn = () => {
    if (currentUsername.username === username) {
      return (
        <button
          className={`btn btn-primary-outline ${styles.edit_profile_btn}`}
          onClick={editProfileHandler}
        >
          Edit Profile
        </button>
      );
    } else if (isInFollowing) {
      return (
        <button
          className={`btn btn-secondary-outline ${styles.edit_profile_btn}`}
          onClick={followBtnHandler}
        >
          Unfollow
        </button>
      );
    } else if (!isInFollowing) {
      return (
        <button
          className={`btn btn-primary ${styles.edit_profile_btn}`}
          onClick={followBtnHandler}
        >
          Follow
        </button>
      );
    }
  };
  const dispatch = useDispatch();
  const followBtnHandler = () => {
    if (isInFollowing) {
      dispatch(unfollowUser({ followUserId: _id }));
    } else {
      dispatch(followUser({ followUserId: _id }));
    }
  };

  const editProfileHandler = () => {
    dispatch(openModal("edit-profile"));
    dispatch(setModalData({data:{ data: {...user} }}));
  };
  return (
    <section className={styles.user_profile_wrapper}>
      <div className={styles.profile_img}>
        <img
          src="https://bermuda-css.netlify.app/assets/avatar.png"
          alt="profile"
        />
      </div>
      <div className={styles.user_info}>
        <h4 className={styles.user_name}>
          {firstName} {lastName}
        </h4>
        <p className={styles.user_username}>@{username}</p>

        {setProfileCtaBtn()}
        <p className={styles.user_bio}>{bio}</p>
        <p className={styles.user_website}>
          <a href={website}>{website}</a>
        </p>
        <div className={styles.user_stats}>
          <div className={styles.stat_wrapper}>
            <p>{following?.length || 0}</p>
            <p>Following</p>
          </div>
          <div className={styles.stat_wrapper}>
            <p>{totalPosts}</p>
            <p>Posts</p>
          </div>
          <div className={styles.stat_wrapper}>
            <p>{followers?.length || 0}</p>
            <p>Followers</p>
          </div>
        </div>
      </div>
    </section>
  );
};
