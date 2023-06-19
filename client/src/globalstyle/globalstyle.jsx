import { createGlobalStyle } from "styled-components";

const variables = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root{

    --font : "Jaldi";

    // 자주쓰는 폰트사이즈
    --font36 : 36px;
    --font24 : 24px;
    --font20 : 20px;
    --font18 : 18px;
    --font16 : 16px;
    --font12 : 12px;
    --font10 : 10px;

    // 자주쓰는 색
    --Black : #333333;
    --White : #fdfcfc;

    // Oauth 색
    --KaKao : #FFDD55;
    --Google : #EFEFEF;

    // 박스 쉐도우
    --Box : 0px 4px 4px rgba(0, 0, 0, 0.25);

  }
`;

export default variables;
