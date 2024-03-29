import React, { useState } from "react";
import styles from "./detailed-post-page.module.css";
import { Comment, CommentInput, DetailedPost } from "../../components";
import { PageLayout } from "../page-layout/PageLayout";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { SetDocumentTitle } from "../../utils";

export const DetailedPostPage = () => {
  SetDocumentTitle("Post | SayIt");
  const { id } = useParams();
  const allPosts = useSelector((state) => state.posts.allPosts);
  const post = allPosts.find((post) => post._id === id);
  const [commentInput, setCommentInput] = useState(false);
  return (
    <>
      <PageLayout>
        {post && <DetailedPost data={{ post, setCommentInput }} />}
        {commentInput ? <CommentInput data={{ post, setCommentInput }} /> : ""}
        <div className={styles.title}>
          <h2>Comments</h2>
        </div>
        {post?.comments?.map((comment) => (
          <Comment data={{ comment, post }} key={comment._id} />
        ))}
      </PageLayout>
    </>
  );
};
