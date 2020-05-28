const path = require(`path`)

exports.createPages = async ({ actions, graphql, resporter }) => {
  const blogPost = path.resolve("./src/templates/blog-post.js")

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
    reporter.panic("failed to create posts", result.errors)
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
