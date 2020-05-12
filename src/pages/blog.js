import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import usePosts from "../hooks/use-posts"
import PostPreview from "../components/post-preview"
import SEO from "../components/seo"

export default function Blog() {
  const posts = usePosts()

  return (
    <Layout>
      <SEO title={`Blogs`} />
      <h2>Read my blogs.</h2>

      {posts.map(post => (
        <PostPreview post={post} key={post.slug} />
      ))}
    </Layout>
  )
}
