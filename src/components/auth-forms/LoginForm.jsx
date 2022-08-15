import styles from "./login-form.module.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import {
  MdPerson,
  MdLock,
  AiFillEye,
  AiFillEyeInvisible,
  MdOutlineLogin,
  MdOutlineKeyboardReturn,
} from "../../services";
import { LoginSchema } from "../../utils";
import { loginActionHandler } from "../../store/authentication/auth-actions";
export const LoginForm = ({ data: { authFormHandler, authModalCloser } }) => {
  const [passwordState, setPasswordState] = useState(false);
  const passwordStateHandler = () => {
    setPasswordState((prev) => !prev);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [initialCredentials, setInitialCredentials] = useState({
    username: "",
    password: "",
  });
  const addGuestLoginCredentials = (values) => {
    values.username = "rdshinde";
    values.password = "rdshinde@";
    setInitialCredentials({ username: "rdshinde", password: "rdshinde@" });
  };
  return (
    <section className={styles.form_wrapper}>
     
      <Formik
        initialValues={{
          username: initialCredentials.username,
          password: initialCredentials.password,
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          setTimeout(() => {
            dispatch(loginActionHandler(values, navigate));
            resetForm();
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isSubmitting,
        }) => (
          <Form>
            <div className={styles.input_group}>
              <div className={styles.input_label_container}>
                <MdPerson className={`${styles.label_icon} p-r-sm`} />
                <label htmlFor="username">Username</label>
              </div>
              <div
                className={`${styles.input_container} ${
                  touched.username && errors.username
                    ? styles.error
                    : touched.username && styles.success
                }`}
                error-message={errors.username}
                success-message="Username varified successfully!"
              >
                <Field
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your username."
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                />
              </div>
            </div>
            <div className={styles.input_group}>
              <div className={styles.input_label_container}>
                <MdLock className={`${styles.label_icon} p-r-sm`} />
                <label htmlFor="password">Password</label>
              </div>
              <div
                className={`${styles.input_container} ${
                  touched.password && errors.password
                    ? styles.error
                    : touched.password && styles.success
                }`}
                error-message={errors.password}
                success-message="Password varified successfully!"
              >
                <Field
                  type={passwordState ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter your password."
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
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
                  className={`btn ${styles.submit_btn} btn-primary ${
                    isSubmitting && "btn-disabled"
                  }`}
                  type="submit"
                >
                  <span className={`${styles.label_icon} p-r-sm`}>
                    <MdOutlineLogin />
                  </span>
                  {isSubmitting ? "Submitting" : "Login"}
                </button>
              </div>
              <div className={styles.other_links}>
                <p>
                  Don't have an account?{" "}
                  <span onClick={() => authFormHandler("signup")}>
                    Register Here
                  </span>
                </p>
                <p className="m-t-md">
                  <span onClick={() => addGuestLoginCredentials(values)}>
                    Login as Guest
                  </span>
                </p>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};
