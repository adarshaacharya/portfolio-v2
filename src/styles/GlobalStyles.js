import { createGlobalStyle } from 'styled-components';
import BlogCssStyles from './blogcss.style';
import PrismJsStyles from './prism/prismjs.style';

const GlobalStyles = createGlobalStyle`
/* Reset */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  /* Scaffolding */
  body, html {
    height : 100%;
    font-family : ${p => p.theme.primaryFontFamily};
    font-size: calc(12px + 0.4vw);
    -webkit-font-smoothing: antialiased;
    font-display : fallback !important;
    line-height: 1.6;
    /* scroll-behavior: smooth; */
  }
  
  body {
    margin : 0;
    padding : 0;
    background-color : ${p => p.theme.bg};
    transition: 0.2s ease-out;
    border-top: 5px solid ${props => props.theme.primaryColor};
  }

  a {
    text-decoration : none;
    color :${p => p.theme.primaryColor};

    &:hover {
      color: ${p => p.theme.primaryText};
    }
  }

  svg {
    cursor: pointer;
  }

  /* Headings */
  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 1.5rem 0;
    line-height: 140%;
    color: ${p => p.theme.primaryText};
  }

  p {
    font-size : 18px;
    font-weight : 400;
    color : ${p => p.theme.secondaryText};
    margin : 0;
    line-height : 34px;
  }

  ul {
      list-style: none;
      padding: 0;
      font-size: 14px;
      line-height: 150%;
  }

  hr {
    border : none;
    border-top : 1px solid ${p => p.theme.hrColor};
    margin : 40px 0;
  }

  ::selection {
    background: ${p => p.theme.selectionColor};
  }
 

 
/*===============
  Prism JS styles
================*/
${PrismJsStyles}

/*===============
  Blog styles
================*/
${BlogCssStyles}

`;

export default GlobalStyles;
