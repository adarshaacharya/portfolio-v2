import { createGlobalStyle } from 'styled-components';

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



 /* For codeblock in blog */
blockquote {
  margin: 1.5rem 0;
  padding: 1rem;
  background: ${p => p.theme.blockQuote};
  border-radius: 0.3rem;
  border: 1px solid #ffe066;
  border-left: 8px solid #ffe066;
}

blockquote p {
  margin: 0;
}

blockquote a {
  padding: 1px 4px;
  border-bottom: 2px solid #ffe066;
  color: #343a40;
}

blockquote a:hover {
  border-radius: 0.3rem;
  border-bottom: 2px solid #ffe066;
  background: #ffe066;
  color: #343a40;
}

`;

export default GlobalStyles;
