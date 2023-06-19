import { createSlice } from "@reduxjs/toolkit";
import { LoginAsync, LogoutAsync } from "../action/loginAction";

const loginSlice = createSlice({
  name : "LoginSlice",
  initialState : {
    isLogin : false,
    AccessToken : null,
  },
  reducers : {
    login(state) {
      state.isLogin = true;
    },
  },
  extraReducers : {
    [LoginAsync.fulfilled] : (state, action) => {
      state.AccessToken = action.payload;
      state.isLogin = true;
      return state;
    },
    [LoginAsync.pending] : (state) => {
      state.isLogin = true;
    },
    [LogoutAsync.fulfilled] : (state) => {
      state.AccessToken = null;
      state.isLogin = false;
    }
  }
});
export const loginAction = loginSlice.actions;
export default loginSlice.reducer;