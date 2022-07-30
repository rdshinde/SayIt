import {
  Comment,
  CommentInput,
  EditProfile,
  Header,
  Post,
  PostInput,
  Sidebar,
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
      </div>
    </div>
  );
};
