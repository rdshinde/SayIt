import axios from "axios";
import { Toast } from "../utils";
export const signupHandler = (formData, resetForm, authFormHandler) => {
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
        Toast({
          type: "success",
          msg: `User created successfully!`,
        });
      }
    } catch (error) {
      if (error.response.status === 422) {
        Toast({
          type: "error",
          msg: `Username is already taken!`,
        });
      }
    } finally {
    }
  })();
};
