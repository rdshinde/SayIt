import styles from "./edit-post-modal.module.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPost } from "../../store/post/post-actions";
import { closeModal } from "../../store/modal-management/modal-slice";

export const EditPostModal = () => {
  const [postCharCount, setPostCharCount] = useState(0);
  const { _id, content, username } = useSelector(
    (state) => state.modal.modalData
  );
  const dispatch = useDispatch();
  const contentChangeHandler = (e) => [setPostcontent(e.target.value)];
  const [postContent, setPostcontent] = useState("");

  const saveChangesHandler = () => {
    dispatch(editPost({ postTextInput: postContent, postId: _id }));
    closeModalHandler();
  };
  useEffect(() => {
    if (content) {
      setPostcontent(content);
    }
  }, [content]);
  useEffect(() => {
    setPostCharCount(postContent.length);
  }, [postContent]);

  const closeModalHandler = () => {
    dispatch(closeModal());
    setPostcontent("");
  };
  return (
    <section className={styles.modal_wrapper}>
      <div className={styles.post_user_info}>
        <div className={styles.user_avatar}>
          <img
            src="https://bermuda-css.netlify.app/assets/avatar.png"
            alt="profile"
          />
        </div>
        <div>
          <h3>Rishikesh Shinde</h3>
          <span className={styles.user_username}>@{username}</span>
        </div>
      </div>
      <div className={styles.post_text_input}>
        <div className={styles.textarea_wrapper}>
          <textarea
            name="post-text"
            id="post-text"
            cols="55"
            rows="6"
            placeholder="Write something Here..."
            value={postContent}
            onChange={contentChangeHandler}
            maxLength={250}
          ></textarea>
          <div
            className={styles.characters_count}
            style={{ color: postCharCount === 250 && "red" }}
          >
            {250 - postCharCount}
          </div>
        </div>
      </div>
      <div className={styles.modal_footer}>
        <button
          className={`btn ${styles.close_btn} btn-primary-outline`}
          onClick={closeModalHandler}
        >
          Close
        </button>
        <button
          className={`btn ${styles.save_btn} btn-primary`}
          onClick={saveChangesHandler}
        >
          Save Changes
        </button>
      </div>
    </section>
  );
};
