import React from "react";
import styles from "./detailed-post-page.module.css";
import { Comment, CommentInput, DetailedPost } from "../../components";
import { PageLayout } from "../page-layout/PageLayout";

export const DetailedPostPage = () => {
  return (
    <>
      <PageLayout>
        <DetailedPost />
        <CommentInput />
        <div className={styles.title}>
          <h2>Comments</h2>
        </div>
        <Comment />
        <Comment />
        <Comment />
      </PageLayout>
    </>
  );
};
