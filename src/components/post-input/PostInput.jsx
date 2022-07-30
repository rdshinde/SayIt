import styles from "./post-input.module.css";
import React from "react";
import ReactJdenticon from "react-jdenticon";
import {
  GrGallery,
  AiOutlineFileGif,
  AiOutlineVideoCameraAdd,
} from "../../services";
export const PostInput = () => {
  return (
    <section className={`${styles.post_input_wrapper}`}>
      <div className={styles.post_input_row1}>
        <div className={styles.user_avatar}>
          <ReactJdenticon size={40} title={`Profile`} />
        </div>
        <div className={styles.post_text_input}>
          <div className={styles.textarea_wrapper}>
            <textarea
              name="post-text"
              id="post-text"
              cols="55"
              rows="6"
              placeholder="Write something Here..."
            ></textarea>
            <div className={styles.characters_count}>180</div>
          </div>
        </div>
      </div>
      <div className={styles.post_input_row2}>
        <div></div>
        <div className={styles.post_input_btns}>
          <div className={styles.media_btns}>
            <button className={`btn`} style={{ paddingLeft: "0" }}>
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
            <button className={`btn ${styles.post_cta_btn}`} title={`Add Post`}>
              Post
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
