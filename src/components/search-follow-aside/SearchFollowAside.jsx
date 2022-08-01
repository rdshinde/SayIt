import styles from "./search-follow-aside.module.css";
import React from "react";
import { AiOutlineSearch } from "../../services";
import { FollowUser } from "../follow-user/FollowUser";
export const SearchFollowAside = () => {
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
      <div className={styles.follower_wrapper}>
        <div className={styles.follower_heading}>
          <h4>Who to Follow?</h4>
          <button className={`${styles.show_more_btn} btn`}>Show More</button>
        </div>
        <FollowUser />
        <FollowUser />
        <FollowUser />
      </div>
    </aside>
  );
};
