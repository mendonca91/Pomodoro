import styled from "styled-components";

export const Content = styled.div`
  width: 500px;
  height: 400px;
  background-color: #1d2f44;
  border-radius: 6px;
  box-shadow: 5px 5px 10px #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  h2 {
    text-align: center;
    font-size: 2.4em;
    margin-bottom: 4%;
  }

  .modal-text {
    padding: 8px;
    display: flex;
    flex-direction: row;
  }

  button{
      margin-top: 16px;
      font-size: 1.2em;
  }

  .btn-ok-config{
    background-color: #fff;
    padding: 8px;
    color: #1d2f44;
    font-weight: 700;
    border-radius: 20px;
    width: 30%;
    margin-top: 4%;
  }
`;

export const Interval = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 16px;

  button {
    border: 0;
    display: flex;
    flex-direction: column;
    margin: 12px;

    svg {
      color: #fff;
      font-size: 2em;
    }
  }
  span {
    font-size: 2.2em;
  }
`;
