import { createSlice } from "@reduxjs/toolkit";
import { LoginAsync, LogoutAsync } from "../action/loginAction";

const loginSlice = createSlice({
  name : "LoginSlice",
  initialState : {
    isLogin : false,
    AccessToken : null,
  },
  reducers : {
    reloading_login: (state) => {
      state.isLogin = true;
    }
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
export const {reloading_login} = loginSlice.actions;
export default loginSlice.reducer;