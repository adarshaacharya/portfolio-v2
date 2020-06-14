import React from "react"

import styles from './style.module.scss'

export default function PageNotFound() {
  return (
    <>
      <div className={styles.notFound}>
        <h1>NOT FOUND</h1>
        <p>
          The page you're looking for doesn't exists. Please click on any link to continue.
        </p>
      </div>
    </>
  )
}
