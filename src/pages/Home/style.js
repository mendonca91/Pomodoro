import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  text-align: center;

  button {
    margin: 2% auto;
    font-size: 1.2em;
  }
`;

export const Content = styled.div`
  width: 400px;
  height: 400px;
  background: #0f1624; /* fallback for old browsers */
  background: linear-gradient(to right, #1d2f44, #0f1624);
  background: linear-gradient(to right, #1d2f44, #0f1624);

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5% auto;
  border: 0;
  border-radius: 50%;
  box-shadow: inset 5px 5px 15px #535369, 5px 5px 10px #000;
`;

export const Timer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    font-size: 6em;
    background-color: transparent;
    width: 100%;
    text-align: center;
    border: none;
    color: transparent;
    display: inline-block;
    text-shadow: 0 0 0 #fff;
  }

  span {
    font-size: 2em;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 600;
  }
`;

export const Config = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .info,
  .start,
  .config {
    background-color: #1d2f44;
    box-shadow: inset 5px 5px 15px #535369, 5px 5px 10px #000;
    padding: 4px;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.4s;

    :hover {
      background-color: #585880;

      svg {
        font-size: 1.6em;
      }
    }

    svg {
      font-size: 1.4em;
      color: #ddd;
    }
  }
  .start {
    width: 100px;
    height: 100px;
    margin: 0 40px;

    svg {
      font-size: 1.8em;
    }
  }
`;
