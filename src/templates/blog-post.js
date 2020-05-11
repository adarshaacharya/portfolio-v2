import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"

import styles from "./blog-post.scss"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY")
      }
      body
    }
  }
`

const BlogPostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <h1>{post.frontmatter.title}</h1>
    <p>
      Posted by {post.frontmatter.author} on {post.frontmatter.date}{" "}
    </p>
    <MDXRenderer>{post.body}</MDXRenderer>
    <Link to="/blog">&larr; Back to posts</Link>
  </Layout>
)

export default BlogPostTemplate
