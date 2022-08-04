import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoaderVisible: false,
  loaderStyle: "",
};

export const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    showLoader: (state, action) => {
      state.isLoaderVisible = true;
      state.loaderStyle = action.payload;
    },
    removeLoader: (state) => {
      state.isLoaderVisible = false;
      state.loaderStyle = "";
    },
  },
});

export const { showLoader, removeLoader } = loaderSlice.actions;

export default loaderSlice.reducer;
