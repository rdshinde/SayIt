import styles from "./comment-input.module.css";
import React, { useState, useEffect } from "react";
import ReactJdenticon from "react-jdenticon";
import {
  GrGallery,
  AiOutlineFileGif,
  AiOutlineVideoCameraAdd,
} from "../../services";
import { useDispatch } from "react-redux";
import { addPostComment } from "../../store/post/post-actions";
export const CommentInput = ({ data: { post, setCommentInput } }) => {
  const dispatch = useDispatch();
  const { username, _id } = post;
  const [commentTextInput, setCommentTextInput] = useState("");
  const textInputHandler = (e) => {
    setCommentTextInput(e.target.value);
  };
  const [commentCharCount, setCommentCharCount] = useState(0);
  useEffect(() => {
    setCommentCharCount(commentTextInput.length);
  }, [commentTextInput]);
  const commentSubmitHandler = () => {
    dispatch(addPostComment({ postId: _id, text: commentTextInput }));
    setCommentTextInput("");
    setCommentInput((prev) => !prev);
  };
  return (
    <section className={`${styles.comment_input_wrapper}`}>
      <div className={styles.comment_input_row1}>
        <div className={styles.user_avatar}>
          <ReactJdenticon size={40} title={`Profile`} />
        </div>
        <div className={styles.comment_text_input}>
          <h5 className={styles.user_name}>Rishikesh Shinde</h5>
          <h5 className={styles.reply_to_text}>
            replying <span className={styles.reply_to}>@{username}</span>
          </h5>
          <div className={styles.textarea_wrapper}>
            <textarea
              name="comment-text"
              id="comment-text"
              cols="55"
              rows="3"
              placeholder="Write something Here..."
              maxLength={250}
              onChange={textInputHandler}
              value={commentTextInput}
            ></textarea>
            <div
              className={styles.characters_count}
              style={{ color: commentCharCount === 250 && "red" }}
            >
              {250 - commentCharCount}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.comment_input_row2}>
        <div></div>
        <div className={styles.comment_input_btns}>
          <div className={styles.media_btns}>
            <button className={`btn btn-disabled`} style={{ paddingLeft: 0 }}>
              <GrGallery size={18} title="Insert Image" />
            </button>
            <button className={`btn btn-disabled`}>
              <AiOutlineFileGif size={20} title="Insert Gif" />
            </button>
            <button className={`btn btn-disabled`}>
              <AiOutlineVideoCameraAdd size={20} title="Insert Video" />
            </button>
          </div>
          <div>
            <button
              className={`btn ${styles.comment_cta_btn}`}
              title={`Add comment`}
              onClick={commentSubmitHandler}
            >
              Add Comment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
