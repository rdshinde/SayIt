import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createPost = createAsyncThunk(
  "posts/createPost",
  async ({ postTextInput, imageFormData }) => {
    const token = localStorage.getItem("token");
    if (imageFormData.get("file").size > 0) {
      console.log("form.length");
      const config = {
        onUploadProgress: (progressEvent) => console.log(progressEvent.loaded),
      };
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dasp4lwr4/image/upload",
        imageFormData,
        config
      );
      console.log(res);
    } else {
      const postData = { content: postTextInput, mediaUrl: "" };
      const {
        data: { posts },
      } = await axios.post("/api/posts", postData, {
        headers: {
          authorization: token,
        },
      });
      return posts;
    }
  }
);
