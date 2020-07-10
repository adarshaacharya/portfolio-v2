import { css } from 'styled-components';

const BlogCssStyles = css`
  /* Disqus styles */
  div#disqus_thread {
    background: whitesmoke;
    padding: 15px 25px;
    border-radius: 10px;
  }
  .blog-content {
    ${p => p.theme.spacing.sectionTopBottom};
    margin-top: 50px;
    line-height: 1.58;

    p {
      font-size: 18px;
      line-height: 36px;
      margin: 1em auto;
    }

    a:hover {
      color: ${p => p.theme.primaryText};
      border-bottom: 2px solid ${p => p.theme.primaryColor};
    }

    a.gatsby-resp-image-link:hover {
      border-bottom: none;
    }

    blockquote p {
      word-break: break-word;
      margin: 0;
    }

    /* code {
      font-size: 16px;
    } */
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
    h1 {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 50px;
    }
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: ${p => p.theme.secondaryFontFamily};
      margin: 2.1em 0 0.5em 0;
      color: ${p => p.theme.primaryColor};
      &:hover .gatsby-remark-autolink svg {
        opacity: 1;
      }
    }
    ul,
    ol {
      font-family: ${p =>
        p.theme.primaryFontFamily}; /*@TODO : New font family*/
      font-size: 1.05rem;
      padding: 0px 10px;
      margin-left: 3em;
      line-height: 220%;
      text-indent: 0px;
    }

    ul {
      list-style: square;
    }

    /* Gatsby image*/
    .gatsby-resp-image-image,
    .gatsby-resp-image-background-image,
    img {
      border-radius: 8px;
      transition: transform 0.6s;

      &:hover {
        transform: scale(1.03);
        cursor: pointer;
      }
    }

    .gatsby-resp-image-background-image {
      box-shadow: 12px 13px 5px -10px rgba(0, 0, 0, 0.38);
    }

    /* Gatsby plugin autolin header*/
    .gatsby-remark-autolink {
      svg {
        scale: 1.3;
        margin-right: 10px;
        fill: ${p => p.theme.primaryColor};
        visibility: visible !important;
        opacity: 0.5;
      }
      &:hover {
        /* border-bottom: none; */
      }
    }
  }
`;
export default BlogCssStyles;
