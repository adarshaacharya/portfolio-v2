import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

import styles from "./style.module.scss"

import TechStack from './techstack';
import usePersonalPhoto from "../../hooks/use-personal-pic"

import github from "../../../images/social/github.svg"
import insta from "../../../images/social/insta.svg"
import twitter from "../../../images/social/twitter.svg"

export default function Author() {
  const photo = usePersonalPhoto()

  return (
    <>
      <div className={styles.authorInfo}>
        <div>
          <Image fixed={photo} className={styles.authorImg} />

          <div className={styles.info}>
            <h1>Aadarsha Acharya</h1>

            <div className={styles.socialIcons}>
              <a href="https://github.com/adarshaacharya">
                <img src={github} alt="GitHub" />
              </a>
              <a href="https://twitter.com/UltimateAdarshx">
                <img src={twitter} alt="Twitter" />
              </a>
              <a href="https://instagram.com/adarsha004">
                <img src={insta} alt="Instagram" />
              </a>
            </div>
          </div>
        </div>

        <p>
          I am a Full-Stack JavaScript Developer from Nepal who loves to code
          and create cool projects. I am specialized in building full stack
          applications that use React in frontend and Node.js, GraphQL in the
          backend.
        </p>

        <div className={styles.techStack}>
            <TechStack />
        </div>
      </div>
    </>
  )
}
