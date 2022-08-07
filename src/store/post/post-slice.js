import { createSlice } from "@reduxjs/toolkit";
import { Toast } from "../../utils";
import { createPost } from "./post-actions";
const initialState = {
  allPosts: [],
  timelinePosts: [],
  sortBy: "Latest",
  status: {
    type: "",
    value: "idle",
    payload: "",
  },
  error: "",
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [createPost.pending]: (state) => {
      state.status.type = "createPost";
      state.status.value = "pending";
    },
    [createPost.fulfilled]: (state, action) => {
      // state.allPosts.push(action.payload);
      console.log(action.payload);
      state.allPosts = action.payload;
      state.status.value = "fulfilled";
      Toast({ type: "success", msg: "Post added!" });
    },
    [createPost.failed]: (state, action) => {
      state.status.value = "error";
      Toast({ type: "error", msg: "An error occurred please try again!!" });
      state.error = action.error.message;
    },
  },
});

// export const { } = postSlice.actions;

export default postSlice.reducer;
