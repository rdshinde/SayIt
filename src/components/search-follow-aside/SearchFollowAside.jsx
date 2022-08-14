import styles from "./search-follow-aside.module.css";
import React from "react";
import { AiOutlineSearch } from "../../services";
import { FollowUser } from "../follow-user/FollowUser";
import { useSelector } from "react-redux";
import { useState } from "react";

export const SearchFollowAside = () => {
  const currentUserId = useSelector((state) => state.auth.user.username);

  const users = useSelector((state) =>
    state.users.allUsers.filter((user) => user.username !== currentUserId)
  );

  const [showMoreUsers, setShowMoreUsers] = useState(false);

  const following = useSelector((state) => state.users.following);

  return (
    <aside className={styles.aside_wrapper}>
      <div className={styles.search_wrapper}>
        <div className={styles.search_icon}>
          <AiOutlineSearch size={20} title={"Search"} />
        </div>
        <input
          type="search"
          id="search-input"
          placeholder="Search post, people, anything."
        />
      </div>
      <div
        className={`${styles.follower_wrapper} ${
          showMoreUsers ? styles.follower_wrapper_height : ""
        }`}
      >
        <div className={styles.follower_heading}>
          <h4>Who to Follow?</h4>
          <button
            className={`${styles.show_more_btn} btn`}
            onClick={() => setShowMoreUsers((prev) => !prev)}
          >
            {showMoreUsers ? "Show Less" : "Show More"}
          </button>
        </div>
        {users?.map((user, index) => {
          const isUserInFollowing = following.find(
            (followingUser) => user._id === followingUser._id
          );
          if (!isUserInFollowing) {
            return <FollowUser data={{ user }} key={index} />;
          }
        })}
      </div>
    </aside>
  );
};
