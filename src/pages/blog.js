import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import usePosts from "../hooks/use-posts"
import PostPreview from "../components/post-preview"

export default function Blog() {
  const posts = usePosts()

  return (
    <Layout>
      <h2>Read my blogs.</h2>

      {posts.map(post => (
        <PostPreview post={post} key={post.slug} />
      ))}
    </Layout>
  )
}
