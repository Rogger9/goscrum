import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --white: #FCFCFC;
    --grey: #EAEAEA;
    --shadow: #2C2C2C30;
    --orange: #EE5737;
    --blue: #3861CF;
    --green: #37C37B;
    --yellow: #F3D603;
    --red: #CA1D1D;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: "Nunito", sans-serif;
    background: var(--white);
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
