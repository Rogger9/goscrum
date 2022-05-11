import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --global-bgColor: #FFFFFF;
    --global-bgSecundary: #FAFAFA;
    --global-grey: #E5E5E5;
    --global-shadow: #00000040;
    --global-orange: #FF452B;
    --global-blue: #007BFF;
    --global-green: #1EC876;
    --global-yellow: #FBDE3F;
    --global-radius: 8px;
    --global-borderColor: #C4C4C4;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: "Nunito", sans-serif;
    background: var(--global-bgColor);
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    min-height: 100vh;
    display: grid;
  }

  .framerMotion {
    width: 100%;
    margin: auto;
  }
`
