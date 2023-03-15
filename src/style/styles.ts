import { createGlobalStyle } from "styled-components";

const GlobalStyle: any = createGlobalStyle`
    body {
      -webkit-user-select: none;
      -moz-user-select: none; 
      -ms-user-select: none;
      user-select: none;
      background-color: #121212;
      overflow-x: hidden;
    }
    body::-webkit-scrollbar {
      /* display: none;   */
    }

    * {
      outline: none;
      text-decoration: none;
      box-sizing: border-box;
    }

    :root {
      --white: #f0f0f0;
      --black: #121212;
      --pink: #eb4970;
    }
`;
export default GlobalStyle;
