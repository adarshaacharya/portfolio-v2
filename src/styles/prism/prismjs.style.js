import { css } from 'styled-components';

const PrismJsStyles = css`
  /* For codeblock in blog */
  blockquote {
    margin: 1.5rem 0;
    padding: 1rem;
    background: ${p => p.theme.blockQuote};
    border-radius: 0.3rem;
    border: 1px solid ${p => p.theme.primaryColor};
    border-left: 8px solid ${p => p.theme.primaryColor};
    font-family: ${p => p.theme.UbuntuFontFamily};
  }

  blockquote p {
    margin: 0;
  }

  blockquote a {
    padding: 1px 4px;
    color: ${p => p.theme.primaryColor};
  }

  blockquote a:hover {
    color: ${p => p.theme.primaryText};
  }

  /* inline backtics */
  p > .language-text {
    padding: 2px 5px !important;
    background: ${p => p.theme.codeText} !important;
    color: ${p => p.theme.primaryText} !important;
    word-break: break-word !important;
    white-space: normal !important;
    font-size: 1em !important;
  }
`;

export default PrismJsStyles;
