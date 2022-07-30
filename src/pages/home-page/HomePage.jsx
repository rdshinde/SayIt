import {
  Comment,
  CommentInput,
  DetailedPost,
  EditProfile,
  Header,
  Post,
  PostInput,
  SearchFollowAside,
  Sidebar,
  UserProfile,
} from "../../components";
import styles from "./home-page.module.css";
export const HomePage = () => {
  return (
    <div>
      <Header />
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
      </div>
    </div>
  );
};
