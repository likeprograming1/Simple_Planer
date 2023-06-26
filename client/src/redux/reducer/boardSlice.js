import { createSlice } from "@reduxjs/toolkit";
import { DeleteBoard, MyBoarData, WriteBoard, boarData, userData } from "../action/boardAction";

const boardSlice = createSlice({
  name : "board",
  initialState : {
    userName : "",
    data : [],
    modal : false,
    ActionState : 0
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
    },
    [DeleteBoard.fulfilled] : (state, action) => {
      state.ActionState = action.payload;
    },
    [WriteBoard.fulfilled] : (state, action) => {
      state.ActionState = action.payload;
    }
  }
})
export const {Ismodal} = boardSlice.actions;
export default boardSlice.reducer; 