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
    loginAction: (state) => {
      //   state.value += 1;
    },
    signupAction: (state) => {
      //   state.value -= 1;
    },
    logoutAction: (state, action) => {
      //   state.value += action.payload;
    },
  },
});

export const { loginAction, signupAction, logoutAction } = authSlice.actions;

export default authSlice.reducer;
