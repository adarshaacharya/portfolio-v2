const path = require(`path`)

// alias for folder system
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        src: path.join(__dirname, 'src'),
        '@src': path.join(__dirname, 'src'),
        '@components': path.join(__dirname, 'src/components'),
        '@pages': path.join(__dirname, 'src/pages'),
        '@hooks': path.join(__dirname, 'src/hooks'),
        '@images': path.join(__dirname, 'static/images'),
        '@portfolio-ui' : path.join(__dirname, 'src/@portfolio-ui')
      },
    },
  })
}

// create pages for each post
exports.createPages = async ({ actions, graphql, resporter }) => {
  const blogPost = path.resolve('./src/templates/blog-post.js')

  const result = await graphql(`
    query {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
        nodes {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  `)

  if (result.erros) {
    reporter.panic('failed to create posts', result.errors)
  }

  // all post pages
  const posts = result.data.allMdx.nodes

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1]
    const next = index === 0 ? null : posts[index - 1]

    actions.createPage({
      path: post.frontmatter.slug, // url of each post will bve slug
      component: blogPost,
      context: {
        slug: post.frontmatter.slug,
        previous,
        next,
      },
    })
  })
}
