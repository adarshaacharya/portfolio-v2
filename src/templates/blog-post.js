import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "@components/Layout"
import SEO from "@components/Seo"

import styles from "./style.module.scss"

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.mdx
  const { previous, next } = pageContext
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        author={post.frontmatter.author}
        description={post.frontmatter.description}
      />

      <div className={styles.currentBlogPost} >
        <h1>{post.frontmatter.title}</h1>
        Posted by {post.frontmatter.author} on {post.frontmatter.date} <br />
        <i>{post.fields.readingTime.text}</i>
        <MDXRenderer>{post.body}</MDXRenderer>
      </div>

      <hr />

      <nav className={styles.bottomNav}>
        <ul>
          <li>
            {previous && (
              <Link to={previous.frontmatter.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.frontmatter.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

// query to retureve current blog info
export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY")
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
