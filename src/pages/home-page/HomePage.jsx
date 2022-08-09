import { FilterModal, Post, PostInput } from "../../components";
import { PageLayout } from "../page-layout/PageLayout";
import styles from "./home-page.module.css";
import { FaFilter } from "../../services";
import { useState } from "react";
import { useSelector } from "react-redux";
export const HomePage = () => {
  const [filterModalState, setFilterModalState] = useState(false);
  const modalStateHandler = () => {
    setFilterModalState((prev) => !prev);
  };
  const allPosts = useSelector((state) => state.posts.allPosts);
  const returnAllPosts = () => {
    console.log(allPosts.posts);
    return allPosts?.map((post, index) => (
      <Post data={{ post }} key={index} />
    ));
  };
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
