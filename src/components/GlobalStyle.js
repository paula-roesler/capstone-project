import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --white: #fcfcfc;
    --background: #293133;
    --primary: #87B8DE;
    --secondary: lightgreen;
    --disabled: #ABBDCF;
    --error: #d36d6d;
    
    --bgGradient: linear-gradient(to top, #293133 0%, #313B3D 100%);

    --border-width: 1px
  }

  * {
    box-sizing: border-box
  }

  body {
    margin: 0;
    font-family: gesta, sans-serif;
    font-size: 112.5%;
    line-height: 1.5;
    background-color: #293133;
  }
  
  input, textarea {
    font-family: inherit;
    font-size: 16px;
    width: 100%;
    background-color: transparent;
    ::placeholder { 
      color: var(--primary);
      font-size: 15px;
    }
    &:focus {
      outline: none;
      border-color: transparent;
      -webkit-appearance: none;
      box-shadow: 0px 0px 4px 1px rgba(144, 238, 155, 1);
      -webkit-box-shadow: 0px 0px 4px 1px rgba(144, 238, 155, 1);
    }
    outline: none !important;
  }
  input, textarea {
    color: var(--primary);
    border: var(--border-width) solid var(--primary);
    padding: 10px;

  }

  h1, h2, h3, h4, h5, h6 {
    font-family: gesta, sans-serif;
    font-weight: 700;
    color: var(--primary);}
`
