import React from "react"

import Layout from "../components/Layout"
import usePosts from "../hooks/use-posts"
import PostPreview from "../components/PostPreview"
import SEO from "../components/Seo"

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



