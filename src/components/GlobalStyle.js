import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --background: #000;
    --primary: royalblue;
    --secondary: limegreen;
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
      box-shadow: 0 0 4px 1px plum;
    }

  }
  input, textarea {
    border: 2px solid #ddd;
    padding: 10px;
  }
`
