import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getHeaderConfig } from "../post/post-actions";

export const getAllUsers = createAsyncThunk("users/getAllUsers", async () => {
  const {
    data: { users },
  } = await axios.get("/api/users");
  return users;
});

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
    console.log(user, followUser);
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
    console.log(user, followUser);
    return { user, followUser };
  }
);
