import styled from "styled-components";

export const WriteSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 760px;
  .box {
    width: 540px;
    height: 640px;
    border: 1px solid var(--Black);
    border-radius: 20px;
    padding: 70px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .titleinput{
      width: 400px;
      height: 40px;
      border: 1px solid var(--Black);
      border-radius: 10px;
      padding: 10px;
      margin-top: 50px;
      margin-bottom: 30px;
      outline: none;
      font-size: var(--font16);
    }
    .textareabox{
      border-radius: 10px;
      font-size: var(--font16);
      width: 400px;
      height: 200px;
      padding: 10px;
      resize: none;
    }
    .btnbox{
      margin-top: 30px;
      width: 400px;
      height: 40px;
      display: flex;
      justify-content: space-between;
      .btns{
        width: 190px;
        height: 40px;
        background-color: var(--Black);
        border: 1px solid var(--Black);
        color: var(--White);
        border-radius: 10px;
        font-size: var(--font16);
        :hover {
          cursor: pointer;
          background-color: var(--White);
          color: var(--Black);
        }
      }
    }
  }
`;