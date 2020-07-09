module.exports = {
  siteMetadata: {
    title: `Aadarsha Acharya`,
    author: `@aadarshatweets`,
    description: `My personal portfoilio created using Gatsby`,
    siteUrl: `https://adarshaacharya.com.np/`,
    keywords: [
      `Aadarsha Acharya, Aadarsha, Acharya, adarshaacharya, Adarsha Acharya, Adarsha, Acharya, adarshaacharya.com.np`,
    ],
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    // Google fonts
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lato`,
          `Inter`,
          `IBM Plex Mono`,
          `Montserrat`,
          `Merriweather`,
          `source sans pro\:300,400,400i,700`,
        ],
        display: 'swap',
      },
    },

    // Image Transformer
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/images`, // globally shares image for graphql query
        name: `images`,
      },
    },

    // Source File System
    // Json source
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `constants`,
        path: `${__dirname}/content/projects`,
      },
    },

    // Markdown Source
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts/`,
        name: `posts`,
      },
    },

    // Mdx plugin & its config for subfield : prismjs, autolink-headers, remark-images, reading-time,etc.
    {
      resolve: 'gatsby-plugin-mdx',

      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          default: require.resolve('./src/components/Layout/index.js'),
        },
        gatsbyRemarkPlugins: [
          //embed codepen
          `gatsby-remark-embedder`,

          // auto link headers
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `gatsby-remark-autolink`,
              maintainCase: true,
              removeAccents: true,
            },
          },

          // prismjs
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              showLineNumbers: true,
              noInlineHighlight: false,
              aliases: { sh: 'bash', js: 'javascript' },
            },
          },

          // images in markdown
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1035,
            },
          },
        ],
      },
    },

    // reading time
    `gatsby-remark-reading-time`,

    // styled components
    `gatsby-plugin-styled-components`,

    // NProgress
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#2298DC`,
        showSpinner: false,
      },
    },
  ],
};
