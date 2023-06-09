import styled from "styled-components";

export const Box = styled.main`
  background-color: var(--White);
`;

export const BoxSection = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  .imgs {
    .firstbox {
      display: flex;
      padding: 100px 0px 235px 0px;
      .board-go {
        margin: auto;
        text-decoration: none;
        padding: 30px;
        border-radius: 30px;
        background-color: var(--Black);
        font-size: var(--font24);
        color: var(--White);
        :hover {
          border: 1px solid var(--Black);
          background-color: var(--White);
          font-size: var(--font24);
          color: var(--Black);
        }
      }
    }
    .secondbox {
      display: flex;
      justify-content: center;
      padding: 0px 0px 235px 0px;
    }
    .thirdbox {
      display: flex;
      justify-content: end;
      padding: 0px 0px 100px 0px;
    }
  }
`;
