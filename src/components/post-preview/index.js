import React from "react"
import { Link } from "gatsby"

import Icon from '../../hooks/use-icons'
import styles from "./post-preview.module.scss"

const PostPreview = ({
  post: { title, date, readingTime, slug, description },
}) => {
  return (
    <article>
      <Link to={slug}>
        <h2>{title}</h2>
        <div className={styles.date}>{date}</div>
        <div className={styles.readingTime}> Reading time : {readingTime}</div>
        <p>{description}</p>
      </Link>
    </article>
  )
}

export default PostPreview
