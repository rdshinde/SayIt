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
      const uploadData = new URLSearchParams(new FormData(imageFormData));
      // await axios
      //   .post(
      //     "https://api.cloudinary.com/v1_1/dasp4lwr4/image/upload",
      //     imageFormData
      //   )
      //   .then((res) => console.log(res.json()))
      //   .catch((e) => console.log(e));
      postData(
        "https://api.cloudinary.com/v1_1/dasp4lwr4/image/upload",
        uploadData
      ).then((data) => {
        console.log(data);
      });
    } else {
      const postData = { content: postTextInput, mediaUrl: "" };
      const {
        data: { posts },
      } = await axios.post("/api/posts", { postData }, configHeader);
      return posts;
    }
  }
);

export const getAllPosts = createAsyncThunk("posts/getPosts", async () => {
  const { data:{posts} } = await axios.get("/api/posts");
  return posts;
});
