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
    console.log(res);
  }).catch((err)=>{
    console.log(err);
  })
})