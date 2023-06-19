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
      padding: 100px 0px 235px 0px;
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
