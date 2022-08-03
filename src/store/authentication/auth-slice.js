import { createSlice } from "@reduxjs/toolkit";
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
      //   state.value += 1;
      const { encodedToken, user } = action.payload;
      state.isUserLoggedIn = true;
      state.encodedToken = encodedToken;
      state.user = { ...user };
    },
    signupAction: (state) => {
      //   state.value -= 1;
    },
    logoutAction: (state, action) => {
      //   state.value += action.payload;
      state.isUserLoggedIn = false;
      state.encodedToken = "";
      state.user = {};
    },
  },
});

export const { loginAction, signupAction, logoutAction } = authSlice.actions;

export default authSlice.reducer;
