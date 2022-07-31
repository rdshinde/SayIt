import { FilterModal, Post, PostInput } from "../../components";
import { PageLayout } from "../page-layout/PageLayout";
import styles from "./home-page.module.css";
import { FaFilter } from "../../services";
import { useState } from "react";
export const HomePage = () => {
  const [filterModalState, setFilterModalState] = useState(false);
  const modalStateHandler = () => {
    setFilterModalState((prev) => !prev);
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
        <Post />
      </PageLayout>
    </>
  );
};
