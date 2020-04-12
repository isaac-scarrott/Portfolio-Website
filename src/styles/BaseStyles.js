import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html, body, #root {
    height: 100%;
    min-height: 100%;
    min-width: 768px;
  }

  body {
    color: ${props => props.theme.colours.text};
    -webkit-tap-highlight-color: transparent;
    line-height: 1.2;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif;
    background-color: ${props => props.theme.colours.background};
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
  }

  [role="button"], button, input, select, textarea {
    outline: none;
    &:focus {
      outline: none;
    }
    &:disabled {
      opacity: 1;
    }
  }

  [role="button"], button, input, textarea {
    appearance: none;
  }

  select:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }

  select::-ms-expand {
    display: none;
  }

  body, select {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    touch-action: manipulation;
  }
`;
