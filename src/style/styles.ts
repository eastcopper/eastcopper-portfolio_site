import { createGlobalStyle } from "styled-components";

const GlobalStyle: any = createGlobalStyle`
    body {
      background-color: #121212;
      overflow-x: hidden;
      
    }
    body::-webkit-scrollbar {
      display: none;  
    }

    * {
      outline: none;
      text-decoration: none;
      box-sizing: border-box;
      &::selection {
        background-color: #eb4970;
        color: #e0e0e0;
      }
    }

    :root {
      --white: #e0e0e0;
      --black: #121212;
      --pink: #eb4970;
    }
`;
export default GlobalStyle;
