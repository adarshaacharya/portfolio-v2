import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          excerpt
          frontmatter {
            title
            slug
            author
            date(formatString: "MMMM Do, YYYY")
            description
          }
          fields {
            readingTime {
              text
            }
          }
        }
      }
    }
  `)

  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    slug: post.frontmatter.slug,
    author: post.frontmatter.author,
    date: post.frontmatter.date,
    description: post.frontmatter.description,
    excerpt: post.excerpt,
    readingTime : post.fields.readingTime.text
  }))
}

export default usePosts
