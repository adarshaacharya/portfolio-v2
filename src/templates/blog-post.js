import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "./blog-post.scss"

const BlogPostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <SEO
      title={post.frontmatter.title}
      author={post.frontmatter.author}
      description={post.frontmatter.description}
    />

    <h1>{post.frontmatter.title}</h1>
    <p>
      Posted by {post.frontmatter.author} on {post.frontmatter.date}{" "}
    </p>
    <i>{post.fields.readingTime.text}</i>
    <MDXRenderer>{post.body}</MDXRenderer>
    <Link to="/blog">&larr; Back to posts</Link>
  </Layout>
)

export default BlogPostTemplate



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
