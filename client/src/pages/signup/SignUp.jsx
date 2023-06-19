import { Box } from "./Style";
import Loginlogo from "../../images/Loginlogo.svg";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Box>
      <div className="box-sizing">
        <Link to="/">
          <img src={Loginlogo} alt="LoginLogo" className="logo-img"></img>
        </Link>
        <input type="text" placeholder="아이디" className="signupinput"></input>
        <input type="text" placeholder="이메일" className="signupinput"></input>
        <input
          type="text"
          placeholder="유저네임"
          className="signupinput"
        ></input>
        <input
          type="password"
          placeholder="비밀번호"
          className="signupinput"
        ></input>
        <input
          type="password"
          placeholder="비밀번호 확인"
          className="signupinput passinput"
        ></input>
        <button className="login-btn">Login</button>
        <button className="Oauth KakaoBtn">KaKao Sign-Up</button>
        <button className="Oauth GoogleBtn">Google Sign-Up</button>
      </div>
    </Box>
  );
};

export default SignUp;
