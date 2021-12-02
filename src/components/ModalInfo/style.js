import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 500px;
  height: 400px;
  background-color: #1d2f44;
  border-radius: 6px;
  box-shadow: 5px 5px 10px #000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .modal-text {
    padding: 8px;

    h2 {
      text-align: center;
      font-size: 2.4em;
      margin-bottom: 4%;
    }

    p {
      text-align: justify;
      padding: 0 8%;
      font-size: 1.2em;
      letter-spacing: 1px;
      line-height: 1.4em;
    }
  }
`;

export const Close = styled.button`
  cursor: pointer;
  position: absolute;
  top: 22px;
  left: 22px;
  border: 0;

  svg {
    font-size: 2.4em;
    color: #fff;
  }
`;
