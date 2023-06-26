import styled from "styled-components";

const Modal = styled.div`
  position: absolute;
  width: 400px;
  height: 200px;
  border: 1px solid var(--Black);
  background-color: var(--White);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    display: flex;
    align-items: center;
    height: 100px;
  }
  .btn-box {
    button{
      background-color: var(--Black);
      color: var(--White);
      border-radius: 10px;
      width: 100px;
      height: 40px;
      font-size: var(--font24);
      margin: 10px;
      :hover{
        background-color: var(--White);
        color: var(--Black);
      }
    }
  }
`;

export default Modal;