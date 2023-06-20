import { PwBox } from "./FindPwStyle";
import Loginlogo from "../../../images/Loginlogo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SendPwAsync } from "../../../redux/action/loginAction";
import { useState } from "react";

const FindPw = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Id, setId] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");

  const handlePw = (id, username, email) => {
    dispatch(SendPwAsync([id, username, email])).then((res) => {
      if (res.payload === 200) {
        navigate("/login");
      }
    });
  };

  return (
    <PwBox>
      <div className="Boxsizing">
        <img src={Loginlogo} alt="findPwlogo" />
        <input
          type="text"
          placeholder="아이디"
          className="textInput"
          onChange={(event) => {
            setId(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="이름"
          className="textInput"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="이메일"
          className="textInput email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <button className="findsend" onClick={() => handlePw(Id, Name, Email)}>
          send
        </button>
        <Link to="/login/findId" className="findIdLink">
          아이디 찾기
        </Link>
      </div>
    </PwBox>
  );
};

export default FindPw;
