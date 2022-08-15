import axios from "axios";
import jwt_decode from "jwt-decode";
import { Toast } from "../../utils";
import { removeLoader, showLoader } from "../loader/loader-slice";
import { closeModal } from "../modal-management/modal-slice";

import { loginAction } from "./auth-slice";

export const loginActionHandler = (loginCredentials, navigate) => {
  return (dispatch) => {
    const sendLoginData = (async () => {
      try {
        dispatch(showLoader("simple"));
        const res = await axios.post("/api/auth/login", loginCredentials);
        if (res.status === 200) {
          dispatch(loginAction({ ...res.data }));
          localStorage.setItem("token", res.data.encodedToken);
          dispatch(closeModal());
          navigate("/home");
          Toast({
            type: "success",
            msg: `Logged in successfully!`,
          });
        }
      } catch (error) {
        if (error.response.status === 404) {
          Toast({
            type: "error",
            msg: `Invalid credentials!`,
          });
        }
      } finally {
        dispatch(removeLoader());
      }
    })();
  };
};

export const retainLoginSession = (navigate) => {
  return (dispatch) => {
    let setTimeOutId;
    setTimeOutId = setTimeout(() => {
      const encodedTokenTemp = localStorage.getItem("token");
      if (encodedTokenTemp) {
        const decodedToken = jwt_decode(
          encodedTokenTemp,
          process.env.REACT_APP_JWT_SECRET
        );
        dispatch(
          loginAction({
            encodedToken: encodedTokenTemp,
            foundUser: decodedToken.attrs,
          })
        );
        Toast({
          type: "success",
          msg: `Logged in as @${decodedToken.attrs.username}`,
        });
      } else {
        navigate(`/`);
      }
    });
    return () => clearTimeout(setTimeOutId);
  };
};
