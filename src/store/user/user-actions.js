import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getHeaderConfig } from "../post/post-actions";

export const getAllUsers = createAsyncThunk("users/getAllUsers", async () => {
  const {
    data: { users },
  } = await axios.get("/api/users");
  return users;
});

export const getCurrentUser = createAsyncThunk(
  "users/getCurrentUser",
  async ({ userId }) => {
    const {
      data: { user },
    } = await axios.get(`/api/users/${userId}`);

    return user;
  }
);

export const followUser = createAsyncThunk(
  "users/followUser",
  async ({ followUserId }) => {
    const {
      data: { user, followUser },
    } = await axios.post(
      `/api/users/follow/${followUserId}`,
      {},
      getHeaderConfig()
    );

    return { user, followUser };
  }
);

export const unfollowUser = createAsyncThunk(
  "users/unfollowUser",
  async ({ followUserId }) => {
    const {
      data: { user, followUser },
    } = await axios.post(
      `/api/users/unfollow/${followUserId}`,
      {},
      getHeaderConfig()
    );

    return { user, followUser };
  }
);

export const editProfile = createAsyncThunk(
  "users/editProfile",
  async ({ userData }) => {
    const {
      data: { user },
    } = await axios.post(`/api/users/edit`, { userData }, getHeaderConfig());
    return user;
  }
);
