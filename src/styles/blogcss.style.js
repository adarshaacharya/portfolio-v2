import { css } from 'styled-components';

const BlogCssStyles = css`
  /* Disqus styles */
  div#disqus_thread {
    background: whitesmoke;
    padding: 15px 25px;
    border-radius: 10px;
  }

  .blog-content {
    font-family: 'Inter';
    padding: 0 1em;
   
    p {
      font-size: 1rem;
      line-height: 36px;
      margin: 1.5rem auto;
      font-weight: 400;
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

    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0 0 1.5rem 0;
      line-height: 1.2;
    }

    /* blog heading styles*/
    h1:not(:first-child),
    h2:not(:first-child),
    h3:not(:first-child),
    h4:not(:first-child) {
      margin-top: 3rem;
    }

    h1 {
      font-size: 2rem;
      font-weight: 700;
    }

    h2 {
      font-size: 1.8rem;
      font-weight: 700;
    }

    h2 code {
      font-size: 1.75rem !important;
    }

    h3 {
      font-size: 1.4rem;
      font-weight: 600;
    }

    h3 code {
      font-size: 1.3rem !important;
    }

    h4 {
      font-size: 1.3rem;
      font-weight: 400;
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
      }
      &:hover {
        visibility: visible !important;
        /* border-bottom: none; */
      }
    }
  }
`;
export default BlogCssStyles;
