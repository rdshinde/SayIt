import { Post, UserProfile } from "../../components";
import { PageLayout } from "../page-layout/PageLayout";
import styles from "./profile-page.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { SetDocumentTitle } from "../../utils";

export const ProfilePage = () => {
  SetDocumentTitle("Profile | SayIt");

  const { id } = useParams();

  const [userProfile, setUserProfile] = useState({});

  const allUsers = useSelector((state) => state.users.allUsers);

  const currentUsername = useSelector((state) => state.auth.user.username);

  const currentUser = useSelector((state) => state.users.currentUser);

  const profileToDisplay = allUsers.find((user) => user.username === id);

  const allPosts = useSelector((state) => state.posts.allPosts);

  const userPosts = allPosts.filter((post) => post.username === id);

  useEffect(() => {
    if (id === currentUsername) {
      setUserProfile({ ...currentUser });
    } else {
      setUserProfile({ ...profileToDisplay });
    }
  }, [id, currentUser]);
  return (
    <>
      <PageLayout>
        {userProfile ? (
          <>
            <UserProfile data={{ user: userProfile, userPosts }} />
            <div className={styles.title}>
              <h2>Recent Posts</h2>
            </div>
            {userPosts?.map((post) => (
              <Post data={{ post }} key={post._id} />
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
