import { css } from 'styled-components';

const BlogCssStyles = css`
  #comments {
    margin: 2rem 0;
  }

  #comments h2 {
    margin: 0;
    text-align: center;
    font-family: ${p => p.theme.UbuntuFontFamily};
  }

  .recommendation a {
    font-size: 1rem;
    font-style: italic;
    font-family: ${p => p.theme.UbuntuFontFamily};
    margin-bottom: 3rem;
  }

  .blog-content {
    font-family: 'Inter';
    padding: 0 1em;

    p {
      font-size: 1rem;
      line-height: 2.215rem;
      margin: 1.5rem 0;
      font-weight: 400;
    }

    a {
      padding-bottom: 0.1rem;
      border-bottom: 2px solid transparent;
      transition: border-color 0.25s ease 0s;
    }
    a:hover {
      color: ${p => p.theme.primaryText};
      border-bottom: 2px solid ${p => p.theme.primaryColor};
    }

    a.gatsby-resp-image-link {
      margin: 50px 0;
    }

    a.gatsby-resp-image-link:hover {
      /* border-bottom: none; */
    }

    blockquote p {
      word-break: break-word;
      margin: 0;
    }

    /*codepen*/
    iframe {
      border-radius: 5px;
      border: none;
      height: 500px !important;
    }

    figure {
      margin: 50px 0;
    }

    figcaption {
      margin: 10px 0;
      font-style: italic;
      font-size: 12px;
      text-align: center;
    }

    @media ${p => p.theme.media.tablet} {
      pre {
        overflow-x: scroll;
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0 0 1.5rem 0;
      line-height: 1.2;
      font-family: ${props => props.theme.UbuntuFontFamily};
    }

    /* blog heading styles*/
    h1:not(:first-child),
    h2:not(:first-child),
    h3:not(:first-child),
    h4:not(:first-child) {
      margin-top: 3rem;
    }

    h1 {
      font-size: 1.8rem;
      font-weight: 700;
    }

    h2 {
      font-size: 1.6rem;
      font-weight: 700;
      line-height: 1.6;
    }

    h2 code {
      font-size: 1.75rem !important;
    }

    h3 {
      font-size: 1.4rem;
      font-weight: 700;
      line-height: 1.6;
    }

    h3 code {
      font-size: 1.3rem !important;
    }

    h4 {
      font-size: 1.3rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    h5 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }

    ul,
    ol {
      font-family: ${p =>
        p.theme.primaryFontFamily}; /*@TODO : New font family*/
      font-size: 1.05rem;
      padding: 0px 10px;
      margin: 0 0 2rem 0;
      line-height: 220%;
      text-indent: 0px;
    }

    li {
      margin: 1rem 0;
      color: ${p => p.theme.secondaryText};
      font-style: italic;

      p {
        display: inline;
      }
    }

    li:nth-child(n)::before {
      content: '👉🏼 ';
      margin-right: 0.7rem;
      display: inline;
    }

    /* Gatsby image*/
    .gatsby-resp-image-image,
    .gatsby-resp-image-background-image,
    img {
      border-radius: 3px;
      width: 100%;
      height: auto;

      &:hover {
      }
    }

    .gatsby-resp-image-background-image {
      box-shadow: 12px 13px 5px -10px rgba(0, 0, 0, 0.2);
    }

    /* Gatsby plugin autolin header*/
    .gatsby-remark-autolink {
      svg {
        scale: 1.3;
        margin-right: 10px;
        fill: ${p => p.theme.primaryColor};
      }
      &:hover {
        visibility: visible !important;
        /* border-bottom: none; */
      }
    }
  }
`;
export default BlogCssStyles;
