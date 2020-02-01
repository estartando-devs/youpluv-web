import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  html {
    scroll-behavior: smooth;
    body {
      font-family: 'Montserrat', sans-serif;
    }
  }
`
export default GlobalStyles