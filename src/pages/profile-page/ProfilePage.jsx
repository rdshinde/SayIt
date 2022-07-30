import { Post, UserProfile } from "../../components";
import { PageLayout } from "../page-layout/PageLayout";
import styles from "./profile-page.module.css";
export const ProfilePage = () => {
  return (
    <>
      <PageLayout>
        <UserProfile />
        <div className={styles.title}>
          <h2>Your Posts</h2>
        </div>
        <Post/>
        <Post/>
      </PageLayout>
    </>
  );
};
