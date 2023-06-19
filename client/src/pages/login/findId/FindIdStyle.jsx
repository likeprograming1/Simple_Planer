import styled from "styled-components";

export const FindBox = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 760px;
  height: 100%;
  .Boxsizing {
    .logo-img {
      margin: 40px 0px;
    }
    .findinput {
      width: 440px;
      height: 40px;
      padding: 10px;
      border: none;
      border-bottom: 1px solid var(--Black);
      font-size: var(--Black);
      margin-bottom: 15px;
      outline: none;
    }
    .inputname {
      margin-bottom: 40px;
    }
    .findsend {
      width: 440px;
      height: 40px;
      padding: 10px;
      border: none;
      border-bottom: 1px solid var(--Black);
      font-size: var(--Black);
      margin-bottom: 15px;
      outline: none;
    }
    .email {
      margin-bottom: 30px;
    }
    .findsend {
      width: 440px;
      height: 50px;
      background-color: var(--Black);
      color: var(--White);
      font-size: var(--font20);
      font-weight: 600;
      border: none;
      border-radius: 20px;
      cursor: pointer;
      margin-bottom: 10px;
      :hover {
        background-color: var(--White);
        color: var(--Black);
        border: 1px solid var(--Black);
      }
    }
    .findIdPw {
      width: 440px;
      display: flex;
      justify-content: end;
      color: var(--Black);
      font-size: var(--font16);
    }
  }
`;
