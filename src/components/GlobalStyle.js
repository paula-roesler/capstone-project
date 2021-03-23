import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --white: #fcfcfc;
    --background: #293133;
    --primary: #87B8DE;
    --secondary: lightgreen;
    --disabled: #ABBDCF;

    --bgGradient: linear-gradient(to top, #293133 0%, #313B3D 100%);

    --border-width: 1px
  }
  // Farben Sudoku App:
  // Blau #3478f5
  // dunkler Hintergrund in Kästchen #161417
  // Hintergrund #000000
  // Buttons Hintergrund #242426
  // Highlight Grün #8dd045
  // Schrift hell #c9c9c9
  // Schrift ausgegraut #636267

  /*
  font-family: gesta, sans-serif;
  font-weight: bold;
  font-style: normal;

  font-family: gesta, sans-serif;
  font-weight: bold;
  font-style: normal;
  */

  * {
    box-sizing: border-box
  }

  body {
    margin: 0;
    font-family: gesta, sans-serif;
    /* font-family: 'Noto Sans', sans-serif; */
    font-size: 112.5%;
    line-height: 1.5;
    background-image: var(--bgGradient)
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
      box-shadow: 0 0 4px 1px var(--primary);
    }

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
