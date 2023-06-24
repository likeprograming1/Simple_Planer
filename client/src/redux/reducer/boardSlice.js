import { createSlice } from "@reduxjs/toolkit";
import { MyBoarData, boarData, userData } from "../action/boardAction";

const boardSlice = createSlice({
  name : "board",
  initialState : {
    userName : "",
    data : [],
    modal : false
  },
  reducers : {
    Ismodal : (state) => {
      state.modal = !state.modal;
    }
  },
  extraReducers : {
    [userData.fulfilled] : (state, action) => {
      state.userName = action.payload.id;
    },
    [boarData.fulfilled] : (state, action) => {
      state.data = action.payload;
    },
    [MyBoarData.fulfilled] : (state, action) => {
      state.data = action.payload;
    }
  }
})
export const {Ismodal} = boardSlice.actions;
export default boardSlice.reducer; 