import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #1a181c;
    --black-bg: #010314;
    --dim-grey: #5d5c69;
    --ghost-white: #f3f3fd;
    --grey200: #ececee;
    --grey600: #757575;
    --indigo: #6360e1;
    --indigo-bg: #6360e133;
    --red: #df0043;
    --white: white;
    --white-smoke: #f8f7fa;
  }

  body {
    background-color: var(--white-smoke);
    // hacked for simplicity to to compensate Radix-UI styles for the Select component
    padding: 0 2rem !important;
    font-size: 16px;
    font-family: sans-serif;
  }
`;

export { GlobalStyles };
