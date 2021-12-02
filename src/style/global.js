import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0%;
        padding: 0%;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        background-color: #141E30;
        color: #f6f6f6;
    }

    button{
        cursor: pointer;
        background-color: transparent;
        border: 0;
        color: #fff;
    }
`;

export default GlobalStyle;
