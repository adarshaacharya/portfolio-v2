exports.createPages = async ({ actions, graphql, resporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (result.erros) {
    reporter.panic("failed to create posts", result.errors)
  }

  const posts = result.data.allMdx.nodes

  posts.forEach(post => {
    actions.createPage({
      path: post.frontmatter.slug, // url of each post
      component: require.resolve("./src/templates/blog-post.js"),
      context: {
        slug: post.frontmatter.slug,
      },
    })
  })
}
