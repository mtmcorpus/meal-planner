import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
  }

  h1 {
    color: #333;
    text-align: center;
    padding: 20px 0;
  }
`;

export default GlobalStyles;