import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const LoginAsync = createAsyncThunk('login', data => {
  return axios.post('/login', 
    { 
      user_id : data[0], 
      pwd : data[1]
    })
    .then((res) => {
      axios.defaults.headers.common.token = res.headers.authorization;  
      const access_token = res.headers.authorization.split(' ')[1]; 
      sessionStorage.setItem("access_token", res.headers.authorization.split(' ')[1]);
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

export const LogoutAsync = createAsyncThunk('logout', async (data) => {

  return await axios.post('/logout')
  .then(() => {
    sessionStorage.removeItem("access_token");
    alert("로그아웃 되었습니다.");
  })
  .catch((err) => { 
    if(err.response.status){
        alert(err);
    }
  });
})

export const SendPwAsync = createAsyncThunk('sendpwd', (data) => {
  return axios.post('/repwd', {
    user_id : data[0],
    user_name : data[1],
    email : data[2]
  }).then((res)=>{
    alert("적으신 이메일로 임시비밀번호를 보냈습니다.");
    return res.status;
  }).catch((err)=>{
    return err.response.status;
  })
})

export const IdSearchAsync = createAsyncThunk("loginSearch", (data) => {
  return axios.post("/loginsearch", {
    email : data[0],
    user_name : data[1]
  }).then((res)=>{
    alert(res.data);
    return res.status;
  }).catch((err) => {
    alert(err.response.data);
    return err.response.status;
  })

})

export const ReAccesstoken = createAsyncThunk("token", async () => {
  return await axios.post("/refresh")
  .then(res => {console.log(res)})
  .catch((err) => {console.log(err)});
})

export const Reloading = createAsyncThunk("reload", async (data) => {
  return 
})

export const Retoken = createAsyncThunk("retoken", async () => {
  
  return axios.post('/refresh')
    .then((res) => {
      axios.defaults.headers.common.token = res.headers.authorization;  
      const access_token = res.headers.authorization.split(' ')[1]; 
      sessionStorage.setItem("access_token", res.headers.authorization.split(' ')[1]);
      return access_token;
  })
  .catch((err) => { 
    if(err.response.status){
      if(err.response.status === 404){
        alert("로그인 시간이 만료되어 다시 로그인 해주세요");
      }else {
        alert(err);
      }
    }
  });
})