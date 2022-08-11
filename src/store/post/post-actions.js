import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const token = localStorage.getItem("token");
const configHeader = {
  headers: {
    authorization: token,
  },
};
async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    body: JSON.stringify(data),
  });
  return response.json();
}

export const createPost = createAsyncThunk(
  "posts/createPost",
  async ({ postTextInput, imageFormData }) => {
    if (imageFormData.get("file").size > 0) {
      console.log("form.length");
      const config = {
        onUploadProgress: (progressEvent) => console.log(progressEvent.loaded),
      };
      // const uploadData = new URLSearchParams(new FormData(imageFormData));
      await axios
        .post(
          "https://api.cloudinary.com/v1_1/dasp4lwr4/image/upload",
          imageFormData,
          config
        )
        .then((res) => console.log(res.json()))
        .catch((e) => console.log(e));
      // postData(
      //   "https://api.cloudinary.com/v1_1/dasp4lwr4/image/upload",
      //   uploadData
      // ).then((data) => {
      //   console.log(data);
      // });
    } else {
      const postData = { content: postTextInput, mediaUrl: "", comments: [] };
      const {
        data: { posts },
      } = await axios.post("/api/posts", { postData }, configHeader);
      return posts;
    }
  }
);

export const getAllPosts = createAsyncThunk("posts/getPosts", async () => {
  const {
    data: { posts },
  } = await axios.get("/api/posts");
  return posts;
});

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async ({ postId }) => {
    const token = localStorage.getItem("token");
    const {
      data: { posts },
    } = await axios.delete(`/api/posts/${postId}`, {
      headers: {
        authorization: token,
      },
    });
    return posts;
  }
);

export const editPost = createAsyncThunk(
  "posts/editPost",
  async ({ postTextInput, postId }) => {
    const postData = { content: postTextInput };
    const {
      data: { posts },
    } = await axios.post(
      `/api/posts/edit/${postId}`,
      { postData },
      configHeader
    );
    return posts;
  }
);

export const likePost = createAsyncThunk(
  "posts/likePost",
  async ({ postId }) => {
    const {
      data: { posts },
    } = await axios.post(`/api/posts/like/${postId}`, {}, configHeader);
    return posts;
  }
);
export const bookmarkPost = createAsyncThunk(
  "posts/bookmarkPost",
  async ({ postId }) => {
    const {
      data: { bookmarks },
    } = await axios.post(`/api/users/bookmark/${postId}`, {}, configHeader);
    return bookmarks;
  }
);
export const addPostComment = createAsyncThunk(
  "posts/addPostComment",
  async ({ postId, text }) => {
    const commentData = { text: text };
    const {
      data: { comments },
    } = await axios.post(
      `/api/comments/add/${postId}`,
      { commentData },
      configHeader
    );
    return { comments, postId };
  }
);
