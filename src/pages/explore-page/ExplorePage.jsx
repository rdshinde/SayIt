import { Post } from "../../components";
import { PageLayout } from "../page-layout/PageLayout";
import styles from "./explore-page.module.css";
export const ExplorePage = () => {
  return (
    <>
      <PageLayout>
        <div className={styles.title}>
          <h2>Explore</h2>
        </div>
        <div className={styles.topics_container}>
          <button className={`btn btn-primary-outline`}>For You</button>
          <button className={`btn btn-secondary-outline`}>Trending</button>
          <button className={`btn btn-secondary-outline`}>Sports</button>
          <button className={`btn btn-secondary-outline`}>Education</button>
          <button className={`btn btn-secondary-outline`}>Technology</button>
        </div>
        <Post/>
        <Post/>
      </PageLayout>
    </>
  );
};
