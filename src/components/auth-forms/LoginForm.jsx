import styles from "./login-form.module.css";
import React, { useState } from "react";
import {
  MdEmail,
  MdLock,
  AiFillEye,
  AiFillEyeInvisible,
  MdOutlineLogin,
  MdOutlineKeyboardReturn,
} from "../../services";
export const LoginForm = ({ data: { authFormHandler, authModalCloser } }) => {
  const [passwordState, setPasswordState] = useState(false);
  const passwordStateHandler = () => {
    setPasswordState((prev) => !prev);
  };
  return (
    <section className={styles.form_wrapper}>
      <form>
        <div className={styles.input_group}>
          <div className={styles.input_label_container}>
            <MdEmail className={`${styles.label_icon} p-r-sm`} />
            <label htmlFor="mail">Email ID</label>
          </div>
          <div
            className={`${styles.input_container} ${styles.success}`}
            error-message="Please enter correct email address."
            success-message="Email varified successfully!"
          >
            <input
              type="email"
              id="mail"
              name="email"
              placeholder="Enter your email address."
              autoComplete="off"
            />
          </div>
        </div>
        <div className={styles.input_group}>
          <div className={styles.input_label_container}>
            <MdLock className={`${styles.label_icon} p-r-sm`} />
            <label htmlFor="password">Password</label>
          </div>
          <div
            className={`${styles.input_container} ${styles.success}`}
            error-message="Please enter correct password."
            success-message="Password varified successfully!"
          >
            <input
              type={passwordState ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter your password."
              autoComplete="off"
            />
            <div
              className={styles.show_password}
              onClick={passwordStateHandler}
            >
              {passwordState ? (
                <AiFillEye size={20} title={`Hide Password`} />
              ) : (
                <AiFillEyeInvisible size={20} title={`Show Password`} />
              )}
            </div>
          </div>
        </div>
        <div className={styles.form_footer}>
          <div>
            <button
              type="button"
              className={`btn ${styles.submit_btn} btn-primary-outline`}
              onClick={authModalCloser}
            >
              <span className={`${styles.label_icon} p-r-sm`}>
                <MdOutlineKeyboardReturn />
              </span>
              Close
            </button>
            <button
              className={`btn ${styles.submit_btn} btn-primary`}
              type="submit"
            >
              <span className={`${styles.label_icon} p-r-sm`}>
                <MdOutlineLogin />
              </span>
              Login
            </button>
          </div>
          <div className={styles.other_links}>
            <p>
              Don't have an account?{" "}
              <span onClick={() => authFormHandler("signup")}>
                Register Here
              </span>
            </p>
          </div>
        </div>
      </form>
    </section>
  );
};
