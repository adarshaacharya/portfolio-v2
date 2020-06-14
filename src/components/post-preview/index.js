import React from "react"
import { Link } from "gatsby"
import PropTypes from 'prop-types'
import Icon from "../../hooks/use-icons"
import styles from "./style.module.scss"

const PostPreview = ({
  post: { title, date, tags, readingTime, slug, description },
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
         
         <ul className={styles.tags}>
         {tags.map(tag => (
            <li>#{tag}</li>
          ))}
         </ul>
          
        </div>
      </Link>
    </article>
  )
}



PostPreview.propTypes = {
  title : PropTypes.string.isRequired,
  slug : PropTypes.string.isRequired,
  description : PropTypes.string.isRequired,
  tags : PropTypes.array.isRequired,
  readingTime : PropTypes.string.isRequired,
  date : PropTypes.string.isRequired
}
export default PostPreview
