import styles from "./edit-profile.module.css";
import React, { useState } from "react";
import { MdAddAPhoto, GrClose } from "../../services";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/modal-management/modal-slice";
import { editProfile } from "../../store/user/user-actions";
export const EditProfile = () => {
  const { firstName, lastName, bio, website, _id } = useSelector(
    (state) => state.modal.modalData.data
  );

  const [profileData, setProfileData] = useState({
    firstName,
    lastName,
    bio,
    website,
  });

  const dispatch = useDispatch();
  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  const profileDataSubmitHandler = () => {
    dispatch(editProfile({ userData: profileData }));
    closeModalHandler();
  };
  return (
    <section className={`${styles.modal_wrapper} centered`}>
      <div className={styles.modal_row1}>
        <div>
          <span
            className={styles.close_btn}
            role={`button`}
            onClick={closeModalHandler}
          >
            <GrClose size={20} title="Close" />
          </span>
          <h3 className={styles.modal_title}>Edit Profile</h3>
        </div>
        <button
          className={`${styles.submit_btn} btn`}
          onClick={profileDataSubmitHandler}
        >
          Save
        </button>
      </div>
      <div className={styles.profile_photo}>
        <span className={styles.photo_edit_btn}>
          <MdAddAPhoto />
        </span>
        <img
          src="https://bermuda-css.netlify.app/assets/avatar.png"
          className="avatar-lg"
          alt="profile"
        />
      </div>
      <div>
        <div className={styles.input_group}>
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            id="Name"
            value={`${profileData.firstName} ${profileData.lastName}`}
            onChange={(e) =>
              setProfileData((prev) => ({
                ...prev,
                firstName: e.target.value.split(" ")[0],
                lastName: e.target.value.split(" ")[1],
              }))
            }
            className={styles.name_input}
          />
        </div>
        <div className={styles.input_group}>
          <label htmlFor="Bio">Bio</label>
          <textarea
            type="text"
            rows="4"
            id="Bio"
            value={profileData.bio}
            onChange={(e) =>
              setProfileData((prev) => ({
                ...prev,
                bio: e.target.value,
              }))
            }
            className={styles.bio_input}
          />
        </div>
        <div className={styles.input_group}>
          <label htmlFor="Website">Website</label>
          <input
            type="text"
            id="Website"
            value={profileData.website}
            onChange={(e) =>
              setProfileData((prev) => ({
                ...prev,
                website: e.target.value,
              }))
            }
            className={styles.name_input}
          />
        </div>
      </div>
    </section>
  );
};
