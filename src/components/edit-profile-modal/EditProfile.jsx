import styles from "./edit-profile.module.css";
import React from "react";
import { MdAddAPhoto, GrClose } from "../../services";
export const EditProfile = () => {
  return (
    <section className={`${styles.modal_wrapper} centered`}>
      <div className={styles.modal_row1}>
        <div>
          <span className={styles.close_btn}>
            <GrClose size={20} title="Close" />
          </span>
          <h3 className={styles.modal_title}>Edit Profile</h3>
        </div>
        <button className={`${styles.submit_btn} btn`}>Save</button>
      </div>
      <div className={styles.profile_photo}>
        <span className={styles.photo_edit_btn}>
          <MdAddAPhoto />
        </span>
        <img
          src="https://bermuda-css.netlify.app/assets/avatar.png"
          className="avatar-lg"
          alt=""
        />
      </div>
      <div>
        <div className={styles.input_group}>
          <label htmlFor="Name">Name</label>
          <input type="text" id="Name" className={styles.name_input} />
        </div>
        <div className={styles.input_group}>
          <label htmlFor="Bio">Bio</label>
          <textarea
            type="text"
            rows="4"
            id="Bio"
            className={styles.bio_input}
          />
        </div>
        <div className={styles.input_group}>
          <label htmlFor="Website">Website</label>
          <input type="text" id="Website" className={styles.name_input} />
        </div>
      </div>
    </section>
  );
};
