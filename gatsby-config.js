const config = require('./config/SiteConfig');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const queries = require('./src/utils/algolia')

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    author: config.siteAuthor,
    description: config.siteDescription,
    siteUrl: config.siteUrl,
    keywords: config.siteKeywords,
  },
  pathPrefix: '/',

  plugins: [
    `gatsby-plugin-react-helmet`,

    // Google fonts
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Inter\:300,400,400i,500,600,700`,
          `Poppins\:500,600,700`,
          `IBM Plex Mono`,
          `Ubuntu\:300,400,400i,500,600,700`,
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
      resolve: 'gatsby-plugin-mdx', // used instead of  gatsby transformer remark
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          default: require.resolve('./src/components/Layout/index.js'),
        },
        gatsbyRemarkPlugins: [
          //embed gif/pen/pin/player/post/sandbox/tweet/video
          `gatsby-remark-embedder`,
          `gatsby-remark-copy-linked-files`,
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
        color: config.themeColor,
        showSpinner: false,
      },
    },

    // SEO and tracking stuffs
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID,
        head: true,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: config.siteUrl,
        sitemap: `${config.siteUrl}/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },

    // pwa features
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.defaultTitle,
        short_name: config.defaultTitle,
        start_url: '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icon: config.logo,
      },
    },
    'gatsby-plugin-offline',

    // search feature
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000,
      },
    },
  ],
};
