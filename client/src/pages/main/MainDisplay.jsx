import { Box, BoxSection } from "./Mainstyles.jsx";
import mainfirst from "../../images/mainfirst.svg";
import mainsecond from "../../images/mainsecond.svg";
import mainthird from "../../images/mainthird.svg";

const MainDisplay = () => {
  return (
    <Box>
      <BoxSection className="main-box">
        <div className="imgs">
          <div className="firstbox">
            <img src={mainfirst} alt="main-checkList" className="first"></img>
          </div>
          <div className="secondbox">
            <img src={mainsecond} alt="main-checkList" className="second"></img>
          </div>
          <div className="thirdbox">
            <img src={mainthird} alt="main-checkList" className="third"></img>
          </div>
        </div>
      </BoxSection>
    </Box>
  );
};
export default MainDisplay;
