import React from "react"
import { Link } from "gatsby"

import styles from "./post-preview.module.scss"

const PostPreview = ({ post }) => (
  <article>
    <h2>
      <Link to={post.slug} className={styles.link}>
        {post.title}
      </Link>
    </h2>

    <p>
      {post.date} - {post.readingTime}
    </p>

    <div>
      <p>{post.description}</p>
      <Link to={post.slug} className={styles.link}>
        read this post &rarr;
      </Link>
    </div>
  </article>
)

export default PostPreview
