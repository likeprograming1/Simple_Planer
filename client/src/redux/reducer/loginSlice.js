import { createSlice } from "@reduxjs/toolkit";
import { LoginAsync, LogoutAsync } from "../action/loginAction";

const loginSlice = createSlice({
  name : "LoginSlice",
  initialState : {
    isLogin : false,
    AccessToken : null,
  },
  reducers : {
  },
  extraReducers : {
    [LoginAsync.fulfilled] : (state, action) => {
      if(action.payload !== undefined){
        state.isLogin = true;
        state.AccessToken = action.payload;
      }
    },
    [LogoutAsync.fulfilled] : (state) => {
      state.AccessToken = null;
      state.isLogin = false;
    }
  }
});
export const {logincheck} = loginSlice.actions;
export default loginSlice.reducer;