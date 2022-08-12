import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Post } from "../../components";
import { PageLayout } from "../page-layout/PageLayout";
import styles from "./bookmarks-page.module.css";
export const BookmarksPage = () => {
  const bookmarks = useSelector((state) => state.posts.bookmarks);

  return (
    <>
      <PageLayout>
        <div className={styles.title}>
          <h2>Your Bookmarks</h2>
        </div>
        {bookmarks?.map((post) => (
          <Post data={{ post }} key={post._id} />
        ))}
        {bookmarks.length === 0 && (
          <h2 className="text-2 text-center text-secondary bold-lg m-t-xxl">
            You have no bookmarked posts!
          </h2>
        )}
      </PageLayout>
    </>
  );
};
