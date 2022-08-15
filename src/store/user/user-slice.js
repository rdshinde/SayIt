import { createSlice } from "@reduxjs/toolkit";
import { Toast } from "../../utils";
import {
  editProfile,
  followUser,
  getAllUsers,
  getCurrentUser,
  unfollowUser,
} from "./user-actions";

const initialState = {
  currentUser: {},
  allUsers: [],
  following: [],
  status: {
    type: "",
    value: "idle",
    payload: "",
  },
  error: "",
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addCurrentUser: (state, action) => {
      state.currentUser = { ...action.payload.user };
    },
  },
  extraReducers: {
    [getCurrentUser.pending]: (state) => {
      state.status.type = "getCurrentUser";
      state.status.value = "pending";
    },
    [getCurrentUser.fulfilled]: (state, action) => {
      state.currentUser = { ...action.payload };
    },
    [getCurrentUser.failed]: (state, action) => {
      state.status.value = "error";
      Toast({ type: "error", msg: "An error occurred please try again!!" });
      state.error = action.error.message;
    },

    [editProfile.pending]: (state) => {
      state.status.type = "editProfile";
      state.status.value = "pending";
    },
    [editProfile.fulfilled]: (state, action) => {
      state.currentUser = { ...action.payload };
      state.allUsers = state.allUsers.map((user) => {
        if (user._id === action.payload._id) {
          return { ...user, ...action.payload };
        } else {
          return { ...user };
        }
      });
      Toast({ type: "success", msg: "Profile updated successfully!" });
    },
    [editProfile.failed]: (state, action) => {
      state.status.value = "error";
      Toast({ type: "error", msg: "An error occurred please try again!!" });
      state.error = action.error.message;
    },

    [getAllUsers.pending]: (state) => {
      state.status.type = "getAllUsers";
      state.status.value = "pending";
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.allUsers = action.payload;
    },
    [getAllUsers.failed]: (state, action) => {
      state.status.value = "error";
      Toast({ type: "error", msg: "An error occurred please try again!!" });
      state.error = action.error.message;
    },

    [followUser.pending]: (state) => {
      state.status.type = "followUser";
      state.status.value = "pending";
    },
    [followUser.fulfilled]: (state, action) => {
      const { user, followUser } = action.payload;
      state.following.push(followUser);
      state.allUsers = state.allUsers.map((user) => {
        if (user._id === followUser._id) {
          return { ...user, ...followUser };
        } else {
          return user;
        }
      });
      state.currentUser = { ...user };
      Toast({
        type: "success",
        msg: `You are now following ${followUser.firstName}.`,
      });
    },
    [followUser.failed]: (state, action) => {
      state.status.value = "error";
      Toast({ type: "error", msg: "An error occurred please try again!!" });
      state.error = action.error.message;
    },

    [unfollowUser.pending]: (state) => {
      state.status.type = "unfollowUser";
      state.status.value = "pending";
    },
    [unfollowUser.fulfilled]: (state, action) => {
      const { user, followUser } = action.payload;
      state.currentUser = { ...user };
      state.following = state.following.filter(
        (user) => user._id !== followUser._id
      );
      state.allUsers = state.allUsers.map((user) => {
        if (user._id === followUser._id) {
          return { ...user, ...followUser };
        } else {
          return user;
        }
      });
      Toast({
        type: "warning",
        msg: `You are now unfollowing ${followUser.firstName}.`,
      });
    },
    [unfollowUser.failed]: (state, action) => {
      state.status.value = "error";
      Toast({ type: "error", msg: "An error occurred please try again!!" });
      state.error = action.error.message;
    },
  },
});

export const getUserName = (userName, users) => {
  const user = users.find((user) => {
    if (user.username === userName) {
      return user;
    }
  });
  return `${user?.firstName} ${user?.lastName}`;
};
export const { addCurrentUser } = userSlice.actions;
export default userSlice.reducer;
