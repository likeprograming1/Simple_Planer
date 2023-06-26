import styled from "styled-components";

const BoardSection = styled.section`
  position: relative;
  height: 760px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--White);
  .head {
    display: flex;
    .head_title{
      display: flex;
      height: 40px;
      align-items: center;
      justify-content: center;
    }
    .Write{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100px;
      height: 40px;
      border: none;
      border-radius: 20px;
      background-color: var(--Black);
      color: var(--White);
      margin-left: 10px;
      text-decoration: none;
      :hover{
        cursor: pointer;
        border: 1px solid var(--Black);
        background-color: var(--White);
        color: var(--Black);
      }
    }
  }
  .box{
    margin-top: 40px;
    width: 600px;
    border: 1px solid var(--Black);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--Black);
    .boardbox{
      button {
        border: none;
        font-weight: 600;
        width: 299px;
        height: 100px;
        cursor: pointer;
      }
      .leftboard {
        border-top-left-radius: 20px;
      }
      .rightboard {
        border-top-right-radius: 20px;
      }
      .disable {
        background-color: var(--White);
        color: var(--Black);
        font-size: var(--font16);
      }
      .able {
        background-color: var(--Black);
        color: var(--White);
        font-size: var(--font20);
      }
    }
    .boards{
      height: 200px;
      overflow-y: scroll;
      ::-webkit-scrollbar{
          width: 10px;

      }
      ::-webkit-scrollbar-thumb{
        border-radius: 20px;
        background-color: var(--White);
      }

      .line{
        width: 460px;
        display: flex;
        color: var(--White);
        .MyBtns{
          display: flex;
          align-items: center;
          justify-content: center;
          .userbtn{
            margin: 0px 10px;
            background-color: var(--Black);
            border: none;
            :hover {
              cursor: pointer;
            }
          }
        }
        .time,
        .username,
        .title {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 40px;
        }
        .time, 
        .username{
          width: 80px;
          font-weight: 100;
          font-size: var(--font12);
        }
        .title {
          width: 300px;
          text-decoration: none;
          color: var(--White);
          font-size: var(--font18);
          cursor: pointer;
        }
      }
    }
    
  }
  
`;

export default BoardSection;