import styled from "styled-components";

export const Box = styled.header`
  padding: 0px 100px;
  background-color: var(--Black);
  .box-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;
    max-width: 1440px;
    height: 64px;
    .Logo {
      width: 150px;
      height: 40px;
    }
    .box-nav {
      display: flex;
      .header-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        width: 100px;
        height: 40px;
        color: var(--White);
        font-size: var(--font20);
        cursor: pointer;
        margin: 0px 10px;
      }
    }
  }
`;
