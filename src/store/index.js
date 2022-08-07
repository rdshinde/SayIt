import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authentication/auth-slice";
import modalReducer from "./modal-management/modal-slice";
import loaderReducer from "./loader/loader-slice";
import postsReducer from "./post/post-slice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
    loader: loaderReducer,
    posts: postsReducer,
  },
});
