import styles from "./comment.module.css";
import React, { useState } from "react";
import ReactJdenticon from "react-jdenticon";
import {
  BsThreeDotsVertical,
  AiFillLike,
  AiOutlineLike,
  AiFillDislike,
  AiOutlineDislike,
  AiOutlineComment,
  CgDetailsMore,
  BsBookmark,
  AiOutlineShareAlt,
  BsBookmarksFill,
} from "../../services";
import { PostMoreActionModal } from "../post-more-action-modal/PostMoreActionModal";
import { TimeAgoDisplay } from "../time-ago-display/TimeAgoDisplay";

export const Comment = ({ data: { comment, post } }) => {
  const { _id, text, username, createdAt } = comment;
  const { _id: postId } = post;

  const [moreActionModalState, setMoreActionModalState] = useState(false);
  const moreActionModalHandler = () => {
    setMoreActionModalState((prev) => !prev);
  };

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
                <h3>Rishikesh Shinde</h3>
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
            <div
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
            </div>
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
            <span>
              <AiOutlineLike size={20} title={`Upvote`} />
            </span>
            <span>
              <AiOutlineDislike size={20} title={`Downvote`} />
            </span>
            <span role={"button"} className={`btn-disabled`}>
              <AiOutlineComment
                size={20}
                title={`Add Comment`}
                className={`btn-disabled`}
              />
            </span>
            <span role={"button"} className={`btn-disabled`}>
              <AiOutlineShareAlt
                size={20}
                title={`Share`}
                className={`btn-disabled`}
              />
            </span>
          </div>
        </section>
      </div>
    </article>
  );
};
