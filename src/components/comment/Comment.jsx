import styles from "./comment.module.css";
import React, { useState } from "react";
import ReactJdenticon from "react-jdenticon";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillEdit,
  MdDelete,
  AiFillLike,
} from "../../services";
import { PostMoreActionModal } from "../post-more-action-modal/PostMoreActionModal";
import { TimeAgoDisplay } from "../time-ago-display/TimeAgoDisplay";
import {
  openModal,
  setModalData,
} from "../../store/modal-management/modal-slice";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePostComment,
  downvotePostComment,
  upvotePostComment,
} from "../../store/post/post-actions";
import { isUserLikedPostComment } from "../../store/post/post-slice";
import { getUserName } from "../../store/user/user-slice";

export const Comment = ({ data: { comment, post } }) => {
  const { _id, text, username, createdAt } = comment;

  const { _id: postId } = post;

  const [moreActionModalState, setMoreActionModalState] = useState(false);

  const moreActionModalHandler = () => {
    setMoreActionModalState((prev) => !prev);
  };

  const dispatch = useDispatch();

  const commentEditHandler = () => {
    dispatch(openModal("edit-post"));
    dispatch(setModalData({ data: { post, comment } }));
  };

  const deleteCommentHandler = () => {
    dispatch(deletePostComment({ postId, commentId: _id }));
  };
  const currentUser = useSelector((state) => state.auth.user.username);
  const isUpvotedByUser = isUserLikedPostComment(currentUser, comment);
  const upvoteHandler = () => {
    if (isUpvotedByUser) {
      dispatch(downvotePostComment({ postId, commentId: _id }));
    } else {
      dispatch(upvotePostComment({ postId, commentId: _id }));
    }
  };
  const users = useSelector((state) => state.users.allUsers);
  const userName = getUserName(username, users);

  const checkUserAsscess = () => {
    return currentUser === username;
  };
  const isUserAccess = checkUserAsscess();
  return (
    <article className={styles.comment_wrapper}>
      <div className={styles.comment_row1}>
        <div className={styles.user_avatar}>
          <ReactJdenticon size={40} title={`Profile`} />
        </div>
        <section>
          <div className={styles.comment_user_info}>
            <div className={styles.info_container}>
              <div>
                <h3>{userName}</h3>
                <span className={styles.user_username}>
                  <span className={`text-primary bold-lg`}> @{username}</span>
                </span>
              </div>
              <div>
                <span className={styles.dot_seperator}></span>
                <span className={styles.timestamp}>
                  <TimeAgoDisplay time={createdAt} />
                </span>
              </div>
            </div>
            {/* <div
              className={styles.comment_more_info_btn}
              onClick={moreActionModalHandler}
            >
              <BsThreeDotsVertical size={20} title={`More Info`} />
              <PostMoreActionModal
                data={{
                  moreActionModalHandler: moreActionModalHandler,
                  moreActionModalState: moreActionModalState,
                }}
              />
            </div> */}
          </div>
          <div className={styles.comment_content}>
            <div className={styles.comment_text_content}>
              <p>{text}</p>
            </div>
            {/* <div className={styles.comment_image_container}>
              <img
                src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q="
                alt="comment_image"
              />
            </div> */}
          </div>
          <div className={styles.comment_cta_btns}>
            <span onClick={upvoteHandler}>
              {isUpvotedByUser ? (
                <span className={styles.liked_icon}>
                  <AiFillLike size={20} title={`Downvote`} />
                </span>
              ) : (
                <AiOutlineLike size={20} title={`Upvote`} />
              )}
            </span>
            <span role={"button"} onClick={commentEditHandler}>
              {isUserAccess ? (
                <AiFillEdit size={20} title={`Edit Comment.`} />
              ) : (
                ""
              )}
            </span>
            <span role={"button"} onClick={deleteCommentHandler}>
              {isUserAccess ? (
                <MdDelete size={20} title={`Delete Comment.`} />
              ) : (
                ""
              )}
            </span>
            <span></span>
          </div>
        </section>
      </div>
    </article>
  );
};
