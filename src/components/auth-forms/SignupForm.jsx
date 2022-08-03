import styles from "./signup-form.module.css";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import * as Yup from "yup";
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
export const SignupForm = ({ data: { authFormHandler, authModalCloser } }) => {
  const [passwordState, setPasswordState] = useState(false);
  const passwordStateHandler = () => {
    setPasswordState((prev) => !prev);
  };

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "This is too short!")
      .max(50, "This is too Long!")
      .required("This is required field."),
    lastName: Yup.string()
      .min(3, "This is too short!")
      .max(50, "This is too Long!")
      .required("This is required field."),
    userName: Yup.string()
      .min(6, "Minimum six characters needed!")
      .max(20, "This is too Long!")
      .required("This is required field."),
    email: Yup.string()
      .email("Invalid email address.")
      .required("This is required field."),
    password: Yup.string()
      .required("This is required field.")
      .min(8, "Password should be eight chars minimum.")
      .matches(/[^A-Za-z0-9]/g, "Password should contain atleast one symbol"),
    confirmPassword: Yup.string().when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both passwords should match."
      ),
    }),
  });
  const signupHandler = (formData, resetForm) => {
    const { firstName, lastName, email, userName, password } = formData;
    const userData = {
      firstName,
      lastName,
      email: email,
      username: userName,
      password: password,
    };
    const sendData = (async () => {
      try {
        const res = await axios.post("/api/auth/signup", userData);
        if (res.status === 201) {
          localStorage.setItem("signup_token", res.data.encodedToken);
          resetForm();
          authFormHandler("login");
        }
      } catch (error) {
        if (error.response.status === 422) {
          console.log("Username is already taken!");
        }
      } finally {
      }
    })();
  };
  return (
    <section className={styles.form_wrapper}>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          userName: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          setTimeout(() => {
            signupHandler(values, resetForm);
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
            <div className={styles.row}>
              <div className={styles.input_group}>
                <div className={styles.input_label_container}>
                  <MdPerson className={`${styles.label_icon} p-r-sm`} />
                  <label htmlFor="firstName">First Name</label>
                </div>
                <div
                  className={`${styles.input_container} ${
                    touched.firstName && errors.firstName
                      ? styles.error
                      : touched.firstName && styles.success
                  }`}
                  error-message={errors.firstName}
                  success-message="Looks good!"
                >
                  <Field
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your firstname."
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                  />
                </div>
              </div>
              <div className={styles.input_group}>
                <div className={styles.input_label_container}>
                  <MdPerson className={`${styles.label_icon} p-r-sm`} />
                  <label htmlFor="lastName">Last Name</label>
                </div>
                <div
                  className={`${styles.input_container} ${
                    touched.lastName && errors.lastName
                      ? styles.error
                      : touched.lastName && styles.success
                  }`}
                  error-message={errors.lastName}
                  success-message="Looks good!"
                >
                  <Field
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your lastname."
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
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
                  className={`${styles.input_container} ${
                    touched.email && errors.email
                      ? styles.error
                      : touched.email && styles.success
                  }`}
                  error-message={errors.email}
                  success-message="Email verified successfully!"
                >
                  <Field
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter your email address."
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </div>
              </div>
              <div className={styles.input_group}>
                <div className={styles.input_label_container}>
                  <RiFolderUserFill className={`${styles.label_icon} p-r-sm`} />
                  <label htmlFor="userName">Username</label>
                </div>
                <div
                  className={`${styles.input_container} ${
                    touched.userName && errors.userName
                      ? styles.error
                      : touched.userName && styles.success
                  }`}
                  error-message={errors.userName}
                  success-message="Looks Good!"
                >
                  <Field
                    type="text"
                    id="userName"
                    name="userName"
                    placeholder="Create unique username."
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.userName}
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
                  className={`${styles.input_container} ${
                    touched.password && errors.password
                      ? styles.error
                      : touched.password && styles.success
                  }`}
                  error-message={errors.password}
                  success-message={"Looks good!"}
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
                </div>
              </div>
              <div className={styles.input_group}>
                <div className={styles.input_label_container}>
                  <MdLock className={`${styles.label_icon} p-r-sm`} />
                  <label htmlFor="confirmPassword">Confirm Password</label>
                </div>
                <div
                  className={`${styles.input_container} ${
                    touched.confirmPassword && errors.confirmPassword
                      ? styles.error
                      : touched.confirmPassword && styles.success
                  }`}
                  error-message={errors.confirmPassword}
                  success-message="Password matched successfully!"
                >
                  <Field
                    type={passwordState ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm your password."
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
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
                  disabled={isSubmitting}
                >
                  <span className={`${styles.label_icon} p-r-sm`}>
                    <MdOutlineLogin />
                  </span>
                  {isSubmitting ? "Submitting" : "Register"}
                </button>
              </div>
              <div className={styles.other_links}>
                <p>
                  Already have an account?{" "}
                  <span onClick={() => authFormHandler("login")}>
                    Login Here
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
