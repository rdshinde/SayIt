import { Post, PostInput } from "../../components";
import { PageLayout } from "../page-layout/PageLayout";
import styles from "./home-page.module.css";
export const HomePage = () => {
  return (
    <>
      <PageLayout>
        <PostInput />
        <div className={styles.title}>
          <h2>Latest Posts</h2>
        </div>
        <Post />
      </PageLayout>
    </>
  );
};
