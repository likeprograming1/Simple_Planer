import { PwBox } from "./FindPwStyle";
import Loginlogo from "../../../images/Loginlogo.svg";
import { Link } from "react-router-dom";

const FindPw = () => {
  return (
    <PwBox>
      <div className="Boxsizing">
        <img src={Loginlogo} alt="findPwlogo" />
        <input type="text" placeholder="아이디" className="textInput" />
        <input type="text" placeholder="이름" className="textInput" />
        <input type="text" placeholder="이메일" className="textInput email" />
        <button className="findsend">send</button>
        <Link to="/login/findId" className="findIdLink">
          아이디 찾기
        </Link>
      </div>
    </PwBox>
  );
};

export default FindPw;
