module.exports = {
  siteMetadata: {
    title: `Aadarsha Acharya`,
    author: `@UltimateAdarsha`,
    description: `My personal portfoilio created using Gatsby`,
    siteUrl: `https://adarshaacharya.com.np/`,
    keywords: [
      `Aadarsha Acharya, Aadarsha, Acharya, adarshaacharya, Adarsha Acharya, Adarsha, Acharya, adarshaacharya.com.np`,
    ],
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-dark-mode`,
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
        display: "swap",
      },
    },

    // Image Transformer
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/images`,
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

    // Mdx plugin & its config for subfield : prismjs, remark-images, reading-time,etc.
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        defaultLayouts: {
          default: require.resolve("./src/components/layout/index.js"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1035,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: { sh: "bash", js: "javascript" },
            },
          },
        ],
      },
    },
    "gatsby-remark-reading-time",
   
  ],
}
