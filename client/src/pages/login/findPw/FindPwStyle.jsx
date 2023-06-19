import styled from "styled-components";

export const PwBox = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 760px;
  img {
    margin: 20px 0px;
  }
  .textInput {
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
  .findIdLink {
    width: 440px;
    display: flex;
    justify-content: end;
    color: var(--Black);
  }
`;
