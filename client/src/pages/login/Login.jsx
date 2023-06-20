import { MainBox, MainContainer } from "./LoginStyle";
import Loginlogo from "../../images/Loginlogo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { LoginAsync } from "../../redux/action/loginAction";

const Login = () => {
  const [Id, setId] = useState("");
  const [Pw, setPw] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (id, pw) => {
    // 하나로 묶어서 보거나 받는 인자가 2개면 안묶고 보내도 된다.
    const data = [id, pw];
    if (id !== undefined && pw !== undefined) {
      dispatch(LoginAsync(data)).then((res) => {
        if (res.payload !== undefined) {
          navigate("/");
        }
      });
    }
  };

  return (
    <MainBox>
      <MainContainer className="Boxsizing">
        <Link to="/">
          <img src={Loginlogo} alt="LoginLogo" className="logo-img"></img>
        </Link>
        <input
          type="text"
          placeholder="아이디"
          onChange={(event) => setId(event.target.value)}
        ></input>
        <input
          type="password"
          placeholder="비밀번호"
          onChange={(event) => setPw(event.target.value)}
        ></input>
        <button className="login-btn" onClick={() => handleLogin(Id, Pw)}>
          Login
        </button>
        <div className="search">
          <Link to="/login/findId" className="idBtn">
            아이디 찾기
          </Link>
          <Link to="/login/findPw">비밀번호 찾기</Link>
        </div>
        <button className="KakaoBtn Oauth">KaKao Login</button>
        <button className="GoogleBtn Oauth">Google Login</button>
      </MainContainer>
    </MainBox>
  );
};

export default Login;
