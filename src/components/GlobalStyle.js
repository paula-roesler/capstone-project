import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --white: #fcfcfc;
    --background: #000;
    --primary: royalblue;
    --secondary: lightgreen;
    --disabled: #ABBDCF;
  }
  
  * {
    box-sizing: border-box
  }

  body {
    margin: 0;
    font-family: sans-serif;
    font-size: 112.5%;
    line-height: 1.5;
  }
  
  input, textarea {
    font-family: inherit;
    font-size: 16px;
    width: 100%;
    &:focus {
      outline: none;
      border-color: transparent;
      box-shadow: 0 0 4px 1px var(--primary);
    }

  }
  input, textarea {
    color: var(--primary);
    border: 2px solid var(--primary);
    padding: 10px;
  }

  h1, h2, h3, h4, h5, h6 {color: var(--primary);}
`
