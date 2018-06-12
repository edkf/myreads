import { injectGlobal } from 'styled-components';

injectGlobal`
*, *:before, *:after {
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
  }

  @import url('https://fonts.googleapis.com/css?family=Spectral:400,600');
  
  body {
    font-family: 'Spectral', serif;
    font-size: 16px;
    -webkit-text-rendering: optimizeLegibility;
    -moz-text-rendering: optimizeLegibility;
    -ms-text-rendering: optimizeLegibility;
    -o-text-rendering: optimizeLegibility;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  
`