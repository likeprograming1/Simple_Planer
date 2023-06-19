import { FindBox } from "./FindIdStyle";
import Loginlogo from "../../../images/Loginlogo.svg";
import { Link } from "react-router-dom";

const FindId = () => {
  return (
    <FindBox>
      <section className="Boxsizing">
        <Link to="/">
          <img src={Loginlogo} alt="LoginLogo" className="logo-img"></img>
        </Link>
        <input type="text" placeholder="이메일" className="findinput" />
        <input type="text" placeholder="이름" className="findinput inputname" />
        <button className="findsend">send</button>
        <Link to="/login/findPw" className="findIdPw">
          비밀번호 찾기
        </Link>
      </section>
    </FindBox>
  );
};

export default FindId;
