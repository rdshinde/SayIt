import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Post } from "../../components";
import {
  getAllPostsLikes,
  getTrendingPosts,
} from "../../store/post/post-slice";
import { PageLayout } from "../page-layout/PageLayout";
import styles from "./explore-page.module.css";
export const ExplorePage = () => {
  const allPosts = useSelector((state) => state.posts.allPosts);
  const [postsToDisplay, setPostsToDisplay] = useState([...allPosts]);

  const [postFilter, setPostFilter] = useState("ALL_POSTS");
  const postFilterHandler = (filter) => {
    setPostFilter(filter);
    switch (filter) {
      case "ALL_POSTS":
        setPostsToDisplay([...allPosts]);
        break;
      case "TRENDING_POSTS":
        const trendingPosts = getTrendingPosts(allPosts);
        setPostsToDisplay([...trendingPosts]);
        break;
      default:
        setPostsToDisplay([...allPosts]);
        break;
    }
  };
  const likesCount = getAllPostsLikes(allPosts);

  const displayPosts = () => {
    if (likesCount === 0 && postFilter === "TRENDING_POSTS") {
      return (
        <h2 className="text-2 text-center text-secondary bold-lg m-t-xxl">
          You have no Trending Posts!
        </h2>
      );
    } else if (postFilter === "ALL_POSTS") {
      postsToDisplay?.map((post) => {
        return <Post data={{ post }} key={post._id} />;
      });
    } else {
      postsToDisplay?.map((post) => {
        return <Post data={{ post }} key={post._id} />;
      });
    }
  };

  return (
    <>
      <PageLayout>
        <div className={styles.title}>
          <h2>Explore</h2>
        </div>
        <div className={styles.topics_container}>
          <button
            className={`btn ${
              postFilter === "ALL_POSTS"
                ? "btn-primary-outline"
                : "btn-secondary-outline"
            }`}
            onClick={() => postFilterHandler("ALL_POSTS")}
          >
            For You
          </button>
          <button
            className={`btn ${
              postFilter === "TRENDING_POSTS"
                ? "btn-primary-outline"
                : "btn-secondary-outline"
            }`}
            onClick={() => postFilterHandler("TRENDING_POSTS")}
          >
            Trending
          </button>
          <button className={`btn btn-secondary-outline btn-disabled`}>
            Sports
          </button>
          <button className={`btn btn-secondary-outline btn-disabled`}>
            Education
          </button>
          <button className={`btn btn-secondary-outline btn-disabled`}>
            Technology
          </button>
        </div>

        {likesCount === 0 && postFilter === "TRENDING_POSTS" ? (
          <h2 className="text-2 text-center text-secondary bold-lg m-t-xxl">
            You have no Trending Posts!
          </h2>
        ) : (
          postsToDisplay?.map((post) => <Post data={{ post }} key={post._id} />)
        )}
      </PageLayout>
    </>
  );
};
