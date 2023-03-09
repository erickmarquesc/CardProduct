import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg-color: #d9cdf7;
    --text-color: #271a45;
  };

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  };

  body {
    height: 100vh;
    display: grid;
    place-content: center;
    background-color: var(--bg-color);
  };

  body * {
    line-height: 100%;
    color: var(--text-color);
    font-family: "Lato", sans-serif;
  }

  h4 {
    font-size: 10px;
    font-weight: 300;
  }

  h1 {
    font-size: 32px;
    margin-top: 12px;
    font-weight: 600;
    font-family: "Crimson Pro", serif;
  }

  p {
    opacity: 0.67;
    margin-top: 12px;
  }
`;