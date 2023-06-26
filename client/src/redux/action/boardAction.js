import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit";

export const userData = createAsyncThunk("userdata", data => {
  return axios.get("/board/userdata", {
    headers : {
      Authorization : data
    }
  }).then((res)=>{
    return res.data;
  }).catch((err) => {
    return err;
  })
})

export const boarData = createAsyncThunk("boardData", (data) => {
  return axios.get('/board/data', {
    headers : {
      Authorization : data
    }
  }).then(res => {
    return res.data;
  }).catch(err => {
    return err;
  })
})

export const MyBoarData = createAsyncThunk("myboardData", (data) => {
  return axios.get('/board/myboard', {
    headers : {
      Authorization : data
    }
  }).then(res => {
    return res.data;
  }).catch(err => {
    return err;
  })
})

export const DeleteBoard = createAsyncThunk("deleteboard",(id)=>{
  return axios.post("/board/delete", {
    board_id : id
  }).then((res)=>{
    return res.status;
  }).catch((err)=>{
    console.log(err);
  })
})

export const WriteBoard = createAsyncThunk("writeboard", async (data) => {
  return await axios.post("/board/write", {
    user_name : data[0], 
    board_title : data[1], 
    board_content : data[2]
  }).then((res) => {
    return res.status;
  }).catch((err) => {
    alert(err.response);
    return err.response.status;
  })
})