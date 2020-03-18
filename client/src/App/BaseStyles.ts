import { createGlobalStyle } from "styled-components";

import {colour} from '../utils/Styles'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Heebo');
  html, body, #root {
    height: 100%;
    min-height: 100%;
    min-width: 768px;
  }

  body {
    color: '#3D3B3C';
    -webkit-tap-highlight-color: transparent;
    line-height: 1.2;
    font-size: 16px;
    font-family: 'Heebo', sans-serif;
    background-color: ${colour.offWhite};
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
