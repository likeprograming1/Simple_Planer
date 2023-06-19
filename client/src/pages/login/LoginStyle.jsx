import styled from "styled-components";

export const MainBox = styled.main`
  height: 100%;
  min-height: 760px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--White);
  .login-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    width: 440px;
    height: 50px;
    background-color: var(--Black);
    color: var(--White);
    font-size: var(--font20);
    font-weight: 600;
    border: none;
    border-radius: 20px;
    margin-bottom: 10px;
    :hover {
      cursor: pointer;
      background-color: var(--White);
      color: var(--Black);
      border: 1px solid var(--Black);
    }
  }
  .logo-img {
    margin: 40px 0px;
  }
  input {
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
  .search {
    width: 440px;
    display: flex;
    align-items: end;
    justify-content: end;
    > a {
      font-size: var(--font16);
      color: var(--Black);
      font-weight: 400;
      margin-bottom: 15px;
    }
    .idBtn {
      margin-right: 10px;
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
`;
