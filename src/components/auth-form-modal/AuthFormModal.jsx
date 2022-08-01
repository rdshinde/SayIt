import styles from "./auth-form-modal.module.css";
import React, { useState } from "react";
import { IoMdPerson, IoMdPersonAdd } from "../../services";
import { LoginForm } from "../auth-forms/LoginForm";
import { SignupForm } from "../auth-forms/SignupForm";
export const AuthFormModal = () => {
  const [authForm, setAuthForm] = useState("login");
  const authFormHandler = (form) => {
    form == "login" ? setAuthForm("login") : setAuthForm("signup");
  };
  return (
    <section className={styles.modal_wrapper}>
      <div className={styles.buttons}>
        <button
          className={`btn ${styles.login_btn} ${
            authForm === "login" ? styles.active : ""
          }`}
          title={"Login"}
          onClick={() => authFormHandler("login")}
        >
          <span className={styles.signup_icon}>
            <IoMdPerson className="p-r-md" />
          </span>
          Login
        </button>
        <button
          className={`btn ${styles.signup_btn} ${
            authForm === "signup" ? styles.active : ""
          }`}
          title={"Signup"}
          onClick={() => authFormHandler("signup")}
        >
          <span className={styles.signup_icon}>
            <IoMdPersonAdd className="p-r-md" />
          </span>
          Signup
        </button>
      </div>
      <div className={styles.forms_container}>
        {authForm === "login" ? (
          <LoginForm data={{ authFormHandler: authFormHandler }} />
        ) : (
          <SignupForm data={{ authFormHandler: authFormHandler }} />
        )}
      </div>
    </section>
  );
};
