import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const LoginAsync = createAsyncThunk('login', async data => {
  
  return await axios.post('/login', 
    { 
      user_id : data[0], 
      pwd : data[1]
    })
    .then((res) => {
      axios.defaults.headers.common.token = res.headers.authorization;  
      const access_token = res.headers.authorization.split(' ')[1];
      sessionStorage.setItem("access_token",access_token );
      console.log(access_token);
      return access_token;
  })
  .catch((err) => { 
    if(err.response.status){
      if(err.response.status === 403){
        alert("아이디나 비밀번호를 확인해 주세요");
      }else {
        alert(err);
      }
    }
  });
})

export const LogoutAsync = createAsyncThunk('login', async (data) => {

  return await axios.post('/logout',{
    headers : {
      Authorization: data,
    }
  })
  .catch((err) => { 
    if(err.response.status){
        alert(err);
    }
  });
})