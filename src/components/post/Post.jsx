import { useSelector, useDispatch } from "react-redux";
import { ShimmerSocialPost } from "react-shimmer-effects";
import styles from "./post.module.css";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import React, { useState } from "react";

import ReactJdenticon from "react-jdenticon";
import {
  BsThreeDotsVertical,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineComment,
  AiOutlineShareAlt,
  BsBookmark,
  BsBookmarksFill,
  AiFillEdit,
  MdDelete,
} from "../../services";
import { PostMoreActionModal } from "../post-more-action-modal/PostMoreActionModal";
import { PostShimmerLoader } from "../post-shimmer-loader/PostShimmerLoader";
import { bookmarkPost, likePost } from "../../store/post/post-actions";
import { CommentInput } from "../comment-input/CommentInput";
export const Post = ({ data: { post } }) => {
  const [isCommentInputVisible, setCommentInput] = useState(false);
  const { _id, content, username, mediaUrl, createdAt } = post;
  const dispatch = useDispatch();
  const [moreActionModalState, setMoreActionModalState] = useState(false);
  const moreActionModalHandler = () => {
    setMoreActionModalState((prev) => !prev);
  };
  const { type, value } = useSelector((state) => state.posts.status);
  TimeAgo.locale(en);
  const timeAgo = new TimeAgo("en-US");

  const postLikeHandler = () => {
    dispatch(likePost({ postId: _id }));
  };

  const postBookmarkHandler = () => {
    dispatch(bookmarkPost({ postId: _id }));
  };

  const commentInputHandler = () => {
    setCommentInput((prev) => !prev);
  };
  return (
    <article className={styles.post_wrapper}>
      {type === "getAllPosts" && value === "pending" ? (
        <ShimmerSocialPost type="text" />
      ) : (
        <div className={styles.post_row1}>
          <div className={styles.user_avatar}>
            <ReactJdenticon size={40} title={`Profile`} />
          </div>
          <section>
            <div className={styles.post_user_info}>
              <div className={styles.info_container}>
                <div>
                  <h3>Rishikesh Shinde</h3>
                  <span className={styles.user_username}>@{username}</span>
                </div>
                <div>
                  <span className={styles.dot_seperator}></span>
                  <span className={styles.timestamp}>{`${timeAgo.format(
                    new Date(createdAt * 1000)
                  )}`}</span>
                </div>
              </div>
              <div
                className={styles.post_more_info_btn}
                onClick={moreActionModalHandler}
              >
                <BsThreeDotsVertical size={20} title={`More Info`} />
                <PostMoreActionModal
                  data={{
                    moreActionModalHandler,
                    moreActionModalState,
                    post,
                  }}
                />
              </div>
            </div>
            <div className={styles.post_content}>
              <div className={styles.post_text_content}>
                <p>{content}</p>
              </div>
              {mediaUrl ? (
                <div className={styles.post_image_container}>
                  <img src={mediaUrl} alt="post_image" />
                </div>
              ) : (
                ""
              )}
            </div>
            <div className={styles.post_cta_btns}>
              <span role={"button"} onClick={postLikeHandler}>
                <AiOutlineHeart size={25} title={`Like`} />
              </span>
              <span role={"button"} onClick={commentInputHandler}>
                <AiOutlineComment size={25} title={`Comment`} />
              </span>
              <span role={"button"} onClick={postBookmarkHandler}>
                <BsBookmark size={20} title={`Add To Bookmarks`} />
              </span>
              <span>
                <AiOutlineShareAlt size={25} title={`Share`} />
              </span>
            </div>
          </section>
        </div>
      )}
      {isCommentInputVisible ? (
        <CommentInput data={{ post, setCommentInput }} />
      ) : (
        ""
      )}
    </article>
  );
};
