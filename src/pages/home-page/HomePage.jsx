import {
  Comment,
  CommentInput,
  DetailedPost,
  EditProfile,
  Header,
  Notification,
  Post,
  PostInput,
  SearchFollowAside,
  Sidebar,
  UserProfile,
} from "../../components";
import { PageLayout } from "../page-layout/PageLayout";
import styles from "./home-page.module.css";
export const HomePage = () => {
  return (
    <div>
      {/* <Header />
      <Sidebar />
      <div style={{ margin: "10rem", width: "100%" }}>
        <PostInput />
        <br />
        <Post />
        <CommentInput />
        <h3>Comments</h3>
        <Comment />
        <br />
        <EditProfile />
        <br />
        <SearchFollowAside />
        <br />
        <UserProfile />
        <br />
        <DetailedPost />
        <CommentInput />

        <Comment />
        <br />
        <br />
        <Notification />
      </div> */}
      <PageLayout>
        {/* <PostInput />

        <Post/>
        <CommentInput/>
        <Comment/> */}
        <UserProfile />
      </PageLayout>
    </div>
  );
};
