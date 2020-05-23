import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

import styles from "./style.module.scss"
import usePersonalPhoto from "../../hooks/use-personal-pic"

export default function Author() {
  const photo = usePersonalPhoto()

  return (
    <>
      <div className={styles.authorInfo}>
        {/* <Image fixed={photo} /> */}
        <h1>
          Aadarsha Acharya
          {/* <span role="img" aria-label="hi">
            👋,
          </span>{" "} */}
        </h1>
        <p>I am a Full-Stack JavaScript Developer from India 🇮🇳 who loves to code and create cool projects. I am specialized in building full stack applications that use React in frontend and Node.js, GraphQL in the backend.

I am in the evergreen process of learning, and I am loving it!

</p>
      </div>
    </>
  )
}
