import { createGlobalStyle } from 'styled-components';
import PrismJsStyles from './prism/prismjs.style';
import BlogCssStyles from './blogcss.style';

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
    font-family : ${p => p.theme.fontFamily};
    font-size: calc(12px + 0.4vw);
    -webkit-font-smoothing: antialiased;
    font-display : fallback !important;
    line-height: 1.6;
    scroll-behavior: smooth;
  }
  
  body {
    margin : 0;
    background-color : ${p => p.theme.bg};
    color : ${p => p.theme.primaryText};
    transition: 0.2s ease-out;
  }

  a {
    text-decoration : none;
    color :${p => p.theme.primaryColor};
    
    &:hover {
      color: ${p => p.theme.primaryText};
    }
  }

  /* Headings */
  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 1.5rem 0;
    line-height: 140%;
    color: ${p => p.theme.primaryText};
  }

  p {
    font-size : 16px;
    margin : 0;
    line-height : 150%;
  }


  ul {
      list-style: none;
      padding: 0;
      font-size: 14px;
      line-height: 150%;
  }

  hr {
    border : 1px solid ${p => p.theme.accentColor};
    margin : 30px 0;
  }

 
/*===============
  Prism JS styles
================*/
${PrismJsStyles}

/*===============
  Blog styles
================*/
${BlogCssStyles}

/*===============
  Scrollbar styles
================*/


`;

export default GlobalStyles;
