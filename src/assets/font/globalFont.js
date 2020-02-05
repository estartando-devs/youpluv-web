import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap');
  html {
    scroll-behavior: smooth;
    body {
      font-family: 'Montserrat', sans-serif;
    }
  }
`;
export default GlobalStyles;
