import styles from "./edit-post-modal.module.css";
import React from "react";

export const EditPostModal = () => {
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
          <span className={styles.user_username}>@rdshinde</span>
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
          ></textarea>
          <div className={styles.characters_count}>180</div>
        </div>
      </div>
      <div className={styles.modal_footer}>
        <button className={`btn ${styles.close_btn} btn-primary-outline`}>
          Close
        </button>
        <button className={`btn ${styles.save_btn} btn-primary`}>
          Save Changes
        </button>
      </div>
    </section>
  );
};
