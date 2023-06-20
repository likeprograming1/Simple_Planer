import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signupAction = createAsyncThunk('signup', async (data) => {
  console.log(data);

  return await axios.post('/signup', {
    user_id : data[0],
    email : data[1],
    user_name : data[2],
    pwd : data[3],
    repwd : data[4]
  }).then((res) => {
    alert(res.data); 
    return res.status;
  }).catch((err) => {
    alert(err.response.data);
    return err.response.status
  });
})

export const IdCheck = createAsyncThunk('IdCheck' , async data => {

  return await axios.post('/idcheck', {
    user_id: data
  }).then((res) => {
    alert(res.data);
    return res.status;
  }).catch((err)=>{
    alert(err.response.data);
    return err.response.status;
  })
})