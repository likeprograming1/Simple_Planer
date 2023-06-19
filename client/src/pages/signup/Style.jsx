import styled from "styled-components";

export const Box = styled.section`
  min-height: 760px;
  display: flex;
  align-items: center;
  justify-content: center;
  .box-sizing {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 50px 40px;
    border-radius: 10px;
    border: 1px solid var(--Black);
    .logo-img {
      margin-bottom: 40px;
    }
    .signupinput {
      background-color: var(--White);
      padding: 10px;
      margin-bottom: 15px;
      outline: none;
      border: none;
      border-bottom: 1px solid var(--Black);
      width: 440px;
      height: 40px;
      font-size: var(--font20);
      color: var(--Black);
      ::placeholder {
        background-color: var(--White);
      }
    }
    .passinput {
      margin-bottom: 25px;
    }
    .login-btn {
      width: 440px;
      height: 50px;
      background-color: var(--Black);
      color: var(--White);
      font-size: var(--font20);
      font-weight: 600;
      border: none;
      border-radius: 20px;
      cursor: pointer;
      margin-bottom: 20px;
      :hover {
        background-color: var(--White);
        color: var(--Black);
        border: 1px solid var(--Black);
      }
    }
    .Oauth {
      font-family: var(--font);
      font-style: normal;
      width: 440px;
      height: 40px;
      border: none;
      border-radius: 20px;
      box-shadow: var(--Box);
      margin-bottom: 15px;
      cursor: pointer;
      font-size: var(--font20);
    }
    .KakaoBtn {
      background-color: var(--KaKao);
    }
    .GoogleBtn {
      background-color: var(--Google);
    }
  }
`;
