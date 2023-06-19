import { FooterBox } from "./FooterStyle";
import naver from "../../images/naver.png";
import instagram from "../../images/instagram.png";
import facebook from "../../images/facebook.png";
const Footer = () => {
  return (
    <FooterBox>
      <nav className="footer-nav">
        <ul>
          <li>
            <h3>회사명</h3>
          </li>
          <li>
            <h3>주소</h3>
          </li>
          <li>
            <h3>법률</h3>
            <div>
              <img src={instagram} alt="instagram-logo"></img>
              <img src={facebook} alt="facebook-logo"></img>
              <img src={naver} alt="naver-logo"></img>
            </div>
          </li>
        </ul>
      </nav>
    </FooterBox>
  );
};

export default Footer;
