import styles from "./comment-input.module.css";
import React from "react";
import ReactJdenticon from "react-jdenticon";
import {
  GrGallery,
  AiOutlineFileGif,
  AiOutlineVideoCameraAdd,
} from "../../services";
export const CommentInput = () => {
  return (
    <section className={`${styles.comment_input_wrapper}`}>
      <div className={styles.comment_input_row1}>
        <div className={styles.user_avatar}>
          <ReactJdenticon size={40} title={`Profile`} />
        </div>
        <div className={styles.comment_text_input}>
          <h5 className={styles.user_name}>Rishikesh Shinde</h5>
          <h5 className={styles.reply_to_text}>
            replying <span className={styles.reply_to}>@rdshinde</span>
          </h5>
          <div className={styles.textarea_wrapper}>
            <textarea
              name="comment-text"
              id="comment-text"
              cols="45"
              rows="3"
              placeholder="Write something Here..."
            ></textarea>
            <div className={styles.characters_count}>180</div>
          </div>
        </div>
      </div>
      <div className={styles.comment_input_row2}>
        <div></div>
        <div className={styles.comment_input_btns}>
          <div className={styles.media_btns}>
            <button className={`btn`}>
              <GrGallery size={18} title="Insert Image" />
            </button>
            <button className={`btn`}>
              <AiOutlineFileGif size={20} title="Insert Gif" />
            </button>
            <button className={`btn`}>
              <AiOutlineVideoCameraAdd size={20} title="Insert Video" />
            </button>
          </div>
          <div>
            <button
              className={`btn ${styles.comment_cta_btn}`}
              title={`Add comment`}
            >
              Add Comment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
