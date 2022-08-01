import styles from "./signup-form.module.css";
import React, { useState } from "react";
import {
  MdEmail,
  MdLock,
  AiFillEye,
  AiFillEyeInvisible,
  MdOutlineLogin,
  MdOutlineKeyboardReturn,
  MdPerson,
  RiFolderUserFill,
} from "../../services";
export const SignupForm = ({ data: { authFormHandler } }) => {
  const [passwordState, setPasswordState] = useState(false);
  const passwordStateHandler = () => {
    setPasswordState((prev) => !prev);
  };
  return (
    <section className={styles.form_wrapper}>
      <form>
        <div className={styles.row}>
          <div className={styles.input_group}>
            <div className={styles.input_label_container}>
              <MdPerson className={`${styles.label_icon} p-r-sm`} />
              <label htmlFor="firstname">First Name</label>
            </div>
            <div className={`${styles.input_container}`}>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Enter your firstname."
                autoComplete="off"
              />
            </div>
          </div>
          <div className={styles.input_group}>
            <div className={styles.input_label_container}>
              <MdPerson className={`${styles.label_icon} p-r-sm`} />
              <label htmlFor="lastname">Last Name</label>
            </div>
            <div className={`${styles.input_container}`}>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Enter your lastname."
                autoComplete="off"
              />
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.input_group}>
            <div className={styles.input_label_container}>
              <MdEmail className={`${styles.label_icon} p-r-sm`} />
              <label htmlFor="email">Email ID</label>
            </div>
            <div
              className={`${styles.input_container} ${styles.success}`}
              error-message="Please enter correct email address."
              success-message="Email varified successfully!"
            >
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email address."
                autoComplete="off"
              />
            </div>
          </div>
          <div className={styles.input_group}>
            <div className={styles.input_label_container}>
              <RiFolderUserFill className={`${styles.label_icon} p-r-sm`} />
              <label htmlFor="username">Username</label>
            </div>
            <div
              className={`${styles.input_container} ${styles.success}`}
              error-message="Please enter correct name."
              success-message="Email varified successfully!"
            >
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Create unique username."
                autoComplete="off"
              />
            </div>
          </div>
        </div>
        <div className={styles.row}>
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
            </div>
          </div>
          <div className={styles.input_group}>
            <div className={styles.input_label_container}>
              <MdLock className={`${styles.label_icon} p-r-sm`} />
              <label htmlFor="confirm-password">Confirm Password</label>
            </div>
            <div
              className={`${styles.input_container} ${styles.success}`}
              error-message="Please enter correct password."
              success-message="Password varified successfully!"
            >
              <input
                type={passwordState ? "text" : "password"}
                id="confirm-password"
                name="confirm-password"
                placeholder="Confirm your password."
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
        </div>
        <div className={styles.form_footer}>
          <div>
            <button
              type="button"
              className={`btn ${styles.submit_btn} btn-primary-outline`}
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
              Register
            </button>
          </div>
          <div className={styles.other_links}>
            <p>
              Already have an account?{" "}
              <span onClick={() => authFormHandler("login")}>Login Here</span>
            </p>
          </div>
        </div>
      </form>
    </section>
  );
};
