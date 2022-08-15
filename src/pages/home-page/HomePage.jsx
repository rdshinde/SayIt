import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { PageLayout } from "../page-layout/PageLayout";
import { FaFilter } from "../../services";
import styles from "./home-page.module.css";
import { FilterModal, Post, PostInput } from "../../components";
import { getLatestPosts } from "../../store/post/post-slice";

export const HomePage = () => {
  const [filterModalState, setFilterModalState] = useState(false);
  const [postsToShow, setPostsToShow] = useState([]);

  const modalStateHandler = () => {
    setFilterModalState((prev) => !prev);
  };

  const allPosts = useSelector((state) => state.posts.allPosts);

  const recentPosts = getLatestPosts(allPosts);
  const returnAllPosts = () => {
    return postsToShow?.map((post, index) => (
      <Post data={{ post }} key={index} />
    ));
  };

  const filterState = useSelector((state) => state.posts.sortBy);

  useEffect(() => {
    if (filterState === "") {
      setPostsToShow([...recentPosts]);
    } else {
      setPostsToShow([...allPosts]);
    }
  }, [allPosts]);

  return (
    <>
      <PageLayout>
        <PostInput />
        <div className={styles.title}>
          <h2>Latest Posts</h2>
          <div className={styles.filter_btn} onClick={modalStateHandler}>
            <FaFilter size={20} title={"Filter"} />
          </div>
          <FilterModal
            data={{
              filterModalState: filterModalState,
              modalStateHandler: modalStateHandler,
            }}
          />
        </div>
        {returnAllPosts()}
      </PageLayout>
    </>
  );
};
