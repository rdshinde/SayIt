import { createSlice } from "@reduxjs/toolkit";
import { Toast } from "../../utils";
const initialState = {
  status: "idle",
  error: null,
  mediaFormData: {},
  postContent: {
    textContent: "",
    mediaUrl: "",
  },
};

export const createPostSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearCreatePostState: (state) => {
      state.status = "idle";
      state.error = "";
      state.mediaFormData = {};
      state.postContent.textContent = "";
      state.postContent.mediaUrl = "";
    },
    setMediaFormData: (state, action) => {
      state.mediaFormData = action.payload;
    },
    setPostContent: (state, action) => {
      const { textContent, mediaUrl } = action.payload;
      state.postContent.textContent = textContent;
      state.postContent.mediaUrl = mediaUrl;
    },
  },
  extraReducers: {},
});

export const { loginAction, logoutAction } = createPostSlice.actions;

export default createPostSlice.reducer;
