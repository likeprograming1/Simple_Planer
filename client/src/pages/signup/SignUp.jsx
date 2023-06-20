import { Box } from "./Style";
import Loginlogo from "../../images/Loginlogo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupAction, IdCheck } from "../../redux/action/signupAction";

const SignUp = () => {
  const [Id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [pwd, setPwd] = useState("");
  const [repwd, setRePwd] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const check = useSelector((state) => state.signup.Id);

  const handleCheck = (id, email, userName, pwd, repwd) => {
    dispatch(signupAction([id, email, userName, pwd, repwd])).then((res) => {
      console.log(res);
      if (res.payload === 200) {
        navigate("/login");
      }
    });
  };
  const handleId = (id) => {
    dispatch(IdCheck(id));
  };
  return (
    <Box>
      <div className="box-sizing">
        <Link to="/">
          <img src={Loginlogo} alt="LoginLogo" className="logo-img"></img>
        </Link>
        <div className="IdBox">
          <input
            type="text"
            placeholder="아이디"
            className="signupinput"
            onChange={(event) => setId(event.target.value)}
          ></input>
          <button
            className="IdCheckBtn"
            onClick={() => {
              handleId(Id);
            }}
          >
            아이디체크
          </button>
        </div>
        <input
          type="text"
          placeholder="이메일"
          className="signupinput"
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <input
          type="text"
          placeholder="유저네임"
          className="signupinput"
          onChange={(event) => setUserName(event.target.value)}
        ></input>
        <input
          type="password"
          placeholder="비밀번호"
          className="signupinput"
          onChange={(event) => setPwd(event.target.value)}
        ></input>
        <input
          type="password"
          placeholder="비밀번호"
          className="signupinput passinput"
          onChange={(event) => setRePwd(event.target.value)}
        ></input>
        <button
          className="login-btn"
          onClick={() => {
            handleCheck(Id, email, userName, pwd, repwd);
          }}
          disabled={!check}
        >
          SignUp
        </button>
        <button className="Oauth KakaoBtn">KaKao Sign-Up</button>
        <button className="Oauth GoogleBtn">Google Sign-Up</button>
      </div>
    </Box>
  );
};

export default SignUp;
