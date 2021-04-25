import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --white: #fcfcfc;
    --background: #293133;
    --primary: #87B8DE;
    --primary04: rgba(135, 148, 222, 0.4);
    --primary00: rgba(135, 148, 222, 0);
    --secondary: lightgreen;
    --secondary04: rgba(144, 238, 144, 0.8);
    --secondary00: rgba(144, 238, 144, 0); 
    --disabled: #ABBDCF;
    --red: #d36d6d;
    --yellow: #fae882;
    
    
    --bgGradient: linear-gradient(to top, #293133 0%, #313B3D 100%);

    --border-width: 1px
  }

  * {
    box-sizing: border-box
  }

  body {
    margin: 0 auto;
    font-family: gesta, sans-serif;
    font-size: 112.5%;
    line-height: 1.5;
    background-color: var(--background);
    width: 375px;
    height: 667px;

  }
  
  input, textarea {
    font-family: inherit;
    font-size: 16px;
    width: 100%;
    color: var(--primary);
    border: var(--border-width) solid var(--primary);
    padding: 10px;
    background-color: transparent;
    ::placeholder { 
      color: var(--primary);
      font-size: 15px;
    }
    &:focus {
      outline: none;
      border-color: transparent;
      -webkit-appearance: none;
      box-shadow: 0px 0px 4px 1px var(--primary);
      -webkit-box-shadow: 0px 0px 4px 1px var(--primary);
    }
    outline: none !important;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: gesta, sans-serif;
    font-weight: 700;
    color: var(--primary);}
`
