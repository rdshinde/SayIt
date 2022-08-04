import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
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

export const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(6, "Minimum six characters needed!")
    .max(20, "This is too Long!")
    .required("This is required field."),

  password: Yup.string()
    .required("This is required field.")
    .min(8, "Password should be eight chars minimum.")
    .matches(/[^A-Za-z0-9]/g, "Password should contain atleast one symbol"),
});
