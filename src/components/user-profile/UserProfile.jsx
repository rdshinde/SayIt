import React from "react";
import styles from "./user-profile.module.css";
export const UserProfile = ({ data: { user, userPosts } }) => {
  const { firstName, lastName, username, followers, following, bio, website } =
    user;
  const totalPosts = userPosts?.length || 0;
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

        <button
          className={`btn btn-primary-outline ${styles.edit_profile_btn}`}
        >
          Edit Profile
        </button>

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
