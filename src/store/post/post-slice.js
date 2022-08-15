import { createSlice, current } from "@reduxjs/toolkit";
import { Toast } from "../../utils";
import {
  addPostComment,
  bookmarkPost,
  createPost,
  deletePost,
  deletePostComment,
  dislikePost,
  downvotePostComment,
  editPost,
  editPostComment,
  getAllPosts,
  likePost,
  removeBookmarkPost,
  upvotePostComment,
} from "./post-actions";
const initialState = {
  allPosts: [],
  timelinePosts: [],
  bookmarks: [],
  sortBy: "",
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
  reducers: {
    addFilters: (state, action) => {
      switch (action.payload) {
        case "LATEST_POSTS":
          state.sortBy = "LATEST_POSTS";
          state.allPosts = getLatestPosts(state.allPosts);
          break;
        case "OLDEST_POSTS":
          state.sortBy = "OLDEST_POSTS";
          state.allPosts = getOldestPosts(state.allPosts);
          break;
        case "TRENDING_POSTS":
          state.sortBy = "TRENDING_POSTS";
          state.allPosts = getTrendingPosts(state.allPosts);
          break;
        case "CLEAR_FILTERS":
          state.sortBy = "";
          state.allPosts = getLatestPosts(state.allPosts);
          break;
        default:
          state.allPosts = state.allPosts;
          break;
      }
    },
  },
  extraReducers: {
    [createPost.pending]: (state) => {
      state.status.type = "createPost";
      state.status.value = "pending";
    },
    [createPost.fulfilled]: (state, action) => {
      state.allPosts = [...action.payload];
      state.status.value = "fulfilled";
      Toast({ type: "success", msg: "Post added!" });
    },
    [createPost.failed]: (state, action) => {
      state.status.value = "error";
      Toast({ type: "error", msg: "An error occurred please try again!!" });
      state.error = action.error.message;
    },

    [getAllPosts.pending]: (state) => {
      state.status.type = "getAllPosts";
      state.status.value = "pending";
    },
    [getAllPosts.fulfilled]: (state, action) => {
      state.allPosts = action.payload;
      state.status.value = "fulfilled";
    },
    [getAllPosts.failed]: (state, action) => {
      state.status.value = "error";
      state.error = action.error.message;
    },

    [deletePost.pending]: (state) => {
      state.status.type = "deletePost";
      state.status.value = "pending";
    },
    [deletePost.fulfilled]: (state, action) => {
      state.allPosts = action.payload;
      state.status.value = "fulfilled";
      Toast({ type: "success", msg: "Post deleted successfully!" });
    },
    [deletePost.failed]: (state, action) => {
      state.status.value = "error";
      Toast({ type: "error", msg: "An error occurred please try again!!" });
      state.error = action.error.message;
    },

    [likePost.pending]: (state) => {
      state.status.type = "likePost";
      state.status.value = "pending";
    },
    [likePost.fulfilled]: (state, action) => {
      state.allPosts = action.payload;
      state.status.value = "fulfilled";
      Toast({ type: "success", msg: "You liked the post!" });
    },
    [likePost.failed]: (state, action) => {
      state.status.value = "error";
      Toast({ type: "error", msg: "An error occurred please try again!!" });
      state.error = action.error.message;
    },

    [dislikePost.pending]: (state) => {
      state.status.type = "dislikePost";
      state.status.value = "pending";
    },
    [dislikePost.fulfilled]: (state, action) => {
      state.allPosts = action.payload;
      state.status.value = "fulfilled";
      Toast({ type: "warning", msg: "You disliked the post." });
    },
    [dislikePost.failed]: (state, action) => {
      state.status.value = "error";
      Toast({ type: "error", msg: "An error occurred please try again!!" });
      state.error = action.error.message;
    },

    [bookmarkPost.pending]: (state) => {
      state.status.type = "bookmarkPost";
      state.status.value = "pending";
    },
    [bookmarkPost.fulfilled]: (state, action) => {
      state.bookmarks = action.payload;
      state.status.value = "fulfilled";
      Toast({ type: "success", msg: "Post added to bookmarks!" });
    },
    [bookmarkPost.failed]: (state, action) => {
      state.status.value = "error";
      Toast({ type: "error", msg: "An error occurred please try again!!" });
      state.error = action.error.message;
    },

    [removeBookmarkPost.pending]: (state) => {
      state.status.type = "removeBookmarkPost";
      state.status.value = "pending";
    },
    [removeBookmarkPost.fulfilled]: (state, action) => {
      state.bookmarks = action.payload;
      state.status.value = "fulfilled";
    },
    [removeBookmarkPost.failed]: (state, action) => {
      state.status.value = "error";
      Toast({ type: "error", msg: "An error occurred please try again!!" });
      state.error = action.error.message;
    },

    [editPost.pending]: (state) => {
      state.status.type = "updatePost";
      state.status.value = "pending";
    },
    [editPost.fulfilled]: (state, action) => {
      const posts = action.payload;
      state.status.value = "fulfilled";
      state.allPosts = [...posts];
      Toast({ type: "success", msg: "Post updated successfully!" });
    },
    [editPost.failed]: (state, action) => {
      state.status.value = "error";
      Toast({ type: "error", msg: "An error occurred please try again!!" });
      state.error = action.error.message;
    },

    [addPostComment.pending]: (state) => {
      state.status.type = "addPostComment";
      state.status.value = "pending";
    },
    [addPostComment.fulfilled]: (state, action) => {
      const { comments, postId } = action.payload;
      const postToUpdate = state.allPosts.find((post) => post._id === postId);
      postToUpdate.comments = getLatestPosts([...comments]);

      Toast({ type: "success", msg: "Comment added successfully!" });
    },
    [addPostComment.failed]: (state, action) => {
      state.status.value = "error";
      Toast({ type: "error", msg: "An error occurred please try again!!" });
      state.error = action.error.message;
    },

    [editPostComment.pending]: (state) => {
      state.status.type = "editPostComment";
      state.status.value = "pending";
    },
    [editPostComment.fulfilled]: (state, action) => {
      const { comments, postId } = action.payload;
      const postToUpdate = state.allPosts.find((post) => post._id === postId);
      postToUpdate.comments = getLatestPosts([...comments]);

      Toast({ type: "success", msg: "Comment Updated successfully!" });
    },
    [editPostComment.failed]: (state, action) => {
      state.status.value = "error";
      Toast({ type: "error", msg: "An error occurred please try again!!" });
      state.error = action.error.message;
    },

    [deletePostComment.pending]: (state) => {
      state.status.type = "deletePostComment";
      state.status.value = "pending";
    },
    [deletePostComment.fulfilled]: (state, action) => {
      const { comments, postId } = action.payload;
      const postToUpdate = state.allPosts.find((post) => post._id === postId);
      postToUpdate.comments = getLatestPosts([...comments]);

      Toast({ type: "success", msg: "Comment Deleted successfully!" });
    },
    [deletePostComment.failed]: (state, action) => {
      state.status.value = "error";
      Toast({ type: "error", msg: "An error occurred please try again!!" });
      state.error = action.error.message;
    },

    [upvotePostComment.pending]: (state) => {
      state.status.type = "upvotePostComment";
      state.status.value = "pending";
    },
    [upvotePostComment.fulfilled]: (state, action) => {
      const { comments, postId } = action.payload;
      const postToUpdate = state.allPosts.find((post) => post._id === postId);
      postToUpdate.comments = getLatestPosts([...comments]);

      Toast({ type: "success", msg: "You liked comment!" });
    },
    [upvotePostComment.failed]: (state, action) => {
      state.status.value = "error";
      Toast({ type: "error", msg: "An error occurred please try again!!" });
      state.error = action.error.message;
    },

    [downvotePostComment.pending]: (state) => {
      state.status.type = "downvotePostComment";
      state.status.value = "pending";
    },
    [downvotePostComment.fulfilled]: (state, action) => {
      const { comments, postId } = action.payload;
      const postToUpdate = state.allPosts.find((post) => post._id === postId);
      postToUpdate.comments = getLatestPosts([...comments]);
      Toast({ type: "warning", msg: "You Disliked Comment." });
    },
    [downvotePostComment.failed]: (state, action) => {
      state.status.value = "error";
      Toast({ type: "error", msg: "An error occurred please try again!!" });
      state.error = action.error.message;
    },
  },
});

// export const { } = postSlice.actions;

export const getTotalPostComments = (post) => {
  const totalComments = post?.comments.length || 0;
  return totalComments;
};
export const getTotalPostLikes = (post) => {
  const totalLikes = post?.likes?.likeCount || 0;
  return totalLikes;
};

export const isUserLikedPost = (username, post) => {
  let isLiked = false;
  const likedUser = post.likes.likedBy.find(
    (user) => user.username === username
  );
  if (likedUser) {
    isLiked = true;
  }
  return isLiked;
};
export const isBookmarked = (id, bookmarks) => {
  let isBookmarked = false;
  const bookmarkedPost = bookmarks.find((post) => post._id === id);
  if (bookmarkedPost) {
    isBookmarked = true;
  }
  return isBookmarked;
};

export const isUserLikedPostComment = (username, comment) => {
  let isLiked = false;
  const likedUser = comment.votes.upvotedBy.find(
    (user) => user.username === username
  );
  if (likedUser) {
    isLiked = true;
  }
  return isLiked;
};

export const getLatestPosts = (posts) => {
  return [...posts].sort((a, b) => b.createdAt - a.createdAt);
};
export const getOldestPosts = (posts) => {
  return [...posts].sort((a, b) => a.createdAt - b.createdAt);
};
export const getTrendingPosts = (posts) => {
  return [...posts].sort((a, b) => b.likes.likeCount - a.likes.likeCount);
};
export const getAllPostsLikes = (posts) => {
  return posts.reduce(
    (likeCount, currPost) => likeCount + currPost.likes.likeCount,
    0
  );
};
export const { addFilters } = postSlice.actions;

export default postSlice.reducer;
