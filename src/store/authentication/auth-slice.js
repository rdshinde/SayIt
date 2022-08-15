import { createSlice } from "@reduxjs/toolkit";
import { Toast } from "../../utils";
const initialState = {
  isUserLoggedIn: false,
  encodedToken: "",
  user: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      const { encodedToken, foundUser } = action.payload;
      state.isUserLoggedIn = true;
      state.encodedToken = encodedToken;
      state.user = { ...foundUser };
    },
    logoutAction: (state) => {
      state.isUserLoggedIn = false;
      state.encodedToken = "";
      state.user = {};
      localStorage.clear();
      Toast({
        type: "success",
        msg: `Logged out successfully!`,
      });
    },
  },
});

export const { loginAction, logoutAction } = authSlice.actions;

export default authSlice.reducer;
