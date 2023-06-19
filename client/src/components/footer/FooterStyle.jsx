import styled from "styled-components";

export const FooterBox = styled.footer`
  /* height: 200px; */
  background-color: var(--Black);
  padding: 0px 100px 60px 100px;
  .footer-nav {
    max-width: 1440px;
    margin: 0 auto;
    ul {
      display: flex;
      flex-direction: column;
      padding-top: 20px;
      li {
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        h3 {
          color: var(--White);
        }
        div > img {
          margin: 0px 10px;
        }
      }
    }
  }
`;
