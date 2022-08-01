import { Post } from "../../components";
import { PageLayout } from "../page-layout/PageLayout";
import styles from "./bookmarks-page.module.css";
export const BookmarksPage = () => {
  return (
    <>
      <PageLayout>
        <div className={styles.title}>
          <h2>Your Bookmarks</h2>
        </div>
        <Post />
        <Post />
      </PageLayout>
    </>
  );
};
