import { css } from 'styled-components';

const PrismJsStyles = css`
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
    color: ${p => p.theme.primaryColor};
  }

  blockquote a:hover {
    border-bottom: 2px solid #ffe066;
    color: ${p => p.theme.primaryText};
  }

  /* inline backtics */
  p > .language-text {
    padding: 2px 5px;
    background: ${p => p.theme.accentColor} !important;
    color: ${p => p.theme.primaryText} !important;
    word-break: break-word !important;
    white-space: normal !important;
    font-size: 16px !important;
  }
`;

export default PrismJsStyles;
