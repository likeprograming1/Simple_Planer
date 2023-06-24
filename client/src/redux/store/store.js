import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../reducer/loginSlice";
import signupSlice from "../reducer/signupSlice";
import boardSlice from "../reducer/boardSlice";

export const store = configureStore({
  reducer : {
    login : loginSlice,
    signup : signupSlice,
    board : boardSlice,
  }
});