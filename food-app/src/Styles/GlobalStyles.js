import { createGlobalStyle } from "styled-components";

export const GlobalStyles=createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap");
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Nunito', sans-serif;
    background-color:rgba(245, 245, 245, 0.91);
    color: #222;
  }
`