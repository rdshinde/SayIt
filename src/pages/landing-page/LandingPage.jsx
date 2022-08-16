import { useDispatch, useSelector } from "react-redux";

import styles from "./landing-page.module.css";
import { AuthFormModal } from "../../components/auth-form-modal/AuthFormModal";
import { openModal } from "../../store/modal-management/modal-slice";
import { SetDocumentTitle } from "../../utils";
export const LandingPage = () => {
  const { isModalVisible, modalName } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const authModalOpener = () => {
    dispatch(openModal("auth-modal"));
  };
  SetDocumentTitle("SayIt");
  return (
    <>
      <div
        className={`${styles.landing_page_wrapper} ${
          isModalVisible ? styles.page_backdrop : ""
        }`}
      >
        {isModalVisible && modalName === "auth-modal" ? <AuthFormModal /> : ""}

        <section className={styles.hero_text_section}>
          <div className={styles.logo_container}>
            <h1>
              <span>Say</span>It
            </h1>
            <small>Just say it.</small>
          </div>
          <div className={styles.hero_description_container}>
            <p>
              <span>Follow</span> <span>people Around the world.</span>
            </p>
            <p>
              <span>Connect</span> <span>with your friends.</span>
            </p>
            <p>
              <span>Share</span> <span>what you think.</span>
            </p>
          </div>
          <div className={styles.hero_btns_container}>
            <button
              className={`btn ${styles.hero_btn}`}
              onClick={authModalOpener}
            >
              Join Now
            </button>
            <button
              className={`btn ${styles.login_page_btn}`}
              onClick={authModalOpener}
            >
              Already have an account
            </button>
          </div>
        </section>

        <section className={styles.hero_img_section}>
          <img
            src="assets/social-hero.svg"
            className="img-responsive"
            alt="hero"
          />
        </section>
      </div>
    </>
  );
};
