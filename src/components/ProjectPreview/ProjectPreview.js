import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import Icon from "@hooks/use-icons"

import styles from "./style.module.scss"

const ProjectPreview = ({
  project: { title, repo, demo, description, currentImg },
}) => {
  return (
    <>
      <div className={styles.project}>
        <Image fluid={currentImg} alt={title} />
        <div>
          <h3>{title}</h3>

          <p>{description}</p>

          <div className={styles.projectLinks}>
            <a href={repo} target="_blank" className={styles.repo}>
              {" "}
              <Icon stack="GitHub" key="github" className={styles.github} />
            </a>
            <a href={demo} target="_blank" className={styles.demo}>
              Demo &rarr;
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

ProjectPreview.propTypes = {
  title: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  currentImg: PropTypes.string.isRequired,
}

export default ProjectPreview
