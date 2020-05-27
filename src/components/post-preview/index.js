import React from "react"
import { Link } from "gatsby"

import Icon from "../../hooks/use-icons"
import styles from "./style.module.scss"

const PostPreview = ({
  post: { title, date, readingTime, slug, description },
}) => {
  return (
    <article> 
      <Link to={slug} key={title}>
        <div className={styles.post}>
          <h2>{title}</h2>
          <div className={styles.prefix}>
            <div className={styles.date}>{date}</div>
            <div className={styles.readingTime}> {readingTime}</div>
          </div>
          <p>{description}</p>
        </div>
      </Link>
    </article>
  )
}

export default PostPreview
