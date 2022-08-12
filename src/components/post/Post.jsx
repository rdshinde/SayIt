import { useSelector, useDispatch } from "react-redux";
import { ShimmerSocialPost } from "react-shimmer-effects";
import styles from "./post.module.css";
import React, { useState } from "react";
import ReactJdenticon from "react-jdenticon";
import {
  BsThreeDotsVertical,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineComment,
  BsBookmark,
  BsBookmarksFill,
  AiOutlineShareAlt,
} from "../../services";
import { PostMoreActionModal } from "../post-more-action-modal/PostMoreActionModal";
import {
  bookmarkPost,
  dislikePost,
  likePost,
  removeBookmarkPost,
} from "../../store/post/post-actions";
import { CommentInput } from "../comment-input/CommentInput";
import { TimeAgoDisplay } from "../time-ago-display/TimeAgoDisplay";
import { Link } from "react-router-dom";
import { isBookmarked, isUserLikedPost } from "../../store/post/post-slice";

export const Post = ({ data: { post } }) => {
  const [isCommentInputVisible, setCommentInput] = useState(false);
  const { _id, content, username, mediaUrl, createdAt } = post;
  const dispatch = useDispatch();
  const [moreActionModalState, setMoreActionModalState] = useState(false);
  const moreActionModalHandler = () => {
    setMoreActionModalState((prev) => !prev);
  };
  const { type, value } = useSelector((state) => state.posts.status);

  const postLikeHandler = () => {
    if (isLikedByUser) {
      dispatch(dislikePost({ postId: _id }));
    } else {
      dispatch(likePost({ postId: _id }));
    }
  };

  const postBookmarkHandler = () => {
    if (isBookmarkedByUser) {
      dispatch(removeBookmarkPost({ postId: _id }));
    } else {
      dispatch(bookmarkPost({ postId: _id }));
    }
  };

  const commentInputHandler = () => {
    setCommentInput((prev) => !prev);
  };
  const currentUser = useSelector((state) => state.auth.user.username);
  const bookmarks = useSelector((state) => state.posts.bookmarks);
  const isLikedByUser = isUserLikedPost(currentUser, post);
  const isBookmarkedByUser = isBookmarked(_id, bookmarks);

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
                  <span className={styles.timestamp}>
                    {<TimeAgoDisplay time={createdAt} />}
                  </span>
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
                <Link to={`/posts/${_id}`}>
                  <p>{content}</p>
                </Link>
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
                {isLikedByUser ? (
                  <span className={styles.liked_icon}>
                    <AiFillHeart size={25} title={`Like`} />
                  </span>
                ) : (
                  <AiOutlineHeart size={25} title={`Like`} />
                )}
              </span>
              <span role={"button"} onClick={commentInputHandler}>
                <AiOutlineComment size={25} title={`Comment`} />
              </span>
              <span role={"button"} onClick={postBookmarkHandler}>
                {isBookmarkedByUser ? (
                  <BsBookmarksFill size={20} title={`Remove from Bookmarks`} />
                ) : (
                  <BsBookmark size={20} title={`Add To Bookmarks`} />
                )}
              </span>
              <span role={"button"} className="btn btn-disabled">
                <AiOutlineShareAlt
                  size={25}
                  title={`Share`}
                  className="btn-disabled"
                />
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
