import { Post, UserProfile } from "../../components";
import { PageLayout } from "../page-layout/PageLayout";
import styles from "./profile-page.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export const ProfilePage = () => {
  const { id } = useParams();
  const allUsers = useSelector((state) => state.users.allUsers);
  const profileToDisplay = allUsers.find((user) => user.username === id);
  const allPosts = useSelector((state) => state.posts.allPosts);
  const userPosts = allPosts.filter((post) => post.username === id);
  
 
  return (
    <>
      <PageLayout>
        {profileToDisplay ? (
          <>
            <UserProfile data={{ user: profileToDisplay, userPosts }} />
            <div className={styles.title}>
              <h2>Recent Posts</h2>
            </div>
            {userPosts?.map((post) => (
              <Post data={{ post }} />
            ))}
          </>
        ) : (
          <h2 className="text-2 text-center text-secondary bold-lg m-t-xxl">
            Invalid profile request!
          </h2>
        )}
      </PageLayout>
    </>
  );
};
