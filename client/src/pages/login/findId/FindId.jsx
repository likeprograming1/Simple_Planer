import { FindBox } from "./FindIdStyle";
import Loginlogo from "../../../images/Loginlogo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { IdSearchAsync } from "../../../redux/action/loginAction";

const FindId = () => {
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleId = (email, user_name) => {
    dispatch(IdSearchAsync([email, user_name])).then((res) => {
      if (res.payload === 200) navigate("/login");
    });
  };

  return (
    <FindBox>
      <section className="Boxsizing">
        <Link to="/">
          <img src={Loginlogo} alt="LoginLogo" className="logo-img"></img>
        </Link>
        <input
          type="text"
          placeholder="이메일"
          className="findinput"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="이름"
          className="findinput inputname"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <button
          className="findsend"
          onClick={() => {
            handleId(Email, Name);
          }}
        >
          send
        </button>
        <Link to="/login/findPw" className="findIdPw">
          비밀번호 찾기
        </Link>
      </section>
    </FindBox>
  );
};

export default FindId;
