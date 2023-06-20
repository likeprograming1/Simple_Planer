import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../reducer/loginSlice";
import signupSlice from "../reducer/signupSlice";

export const store = configureStore({
  reducer : {
    login : loginSlice,
    signup : signupSlice
  }
});