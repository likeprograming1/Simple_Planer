import { createSlice } from "@reduxjs/toolkit";
import { IdCheck } from "../action/signupAction";

const signupSlice = createSlice({
  name : "signup",
  initialState : {
    Id : false
  },
  reducers : {},
  extraReducers : {
    [IdCheck.fulfilled] : (state, action) => {
      if(action.payload === 200){
        state.Id = true;
      }
    }
  }
});

export default signupSlice.reducer;