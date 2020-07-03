import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

import styles from "./style.module.scss"

import TechStack from "./TechStack"
import usePersonalPhoto from "../../hooks/use-personal-pic"
import Icon from "../../hooks/use-icons"
import { SOCIALS } from "../../constants/social"

import github from "../../../images/social/github.svg"
import insta from "../../../images/social/insta.svg"
import twitter from "../../../images/social/twitter.svg"
import download from "../../../images/download.svg"

export default function AuthorInfo() {
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
            <p>
              adarshaofficial@gmail.com
            </p>
          </div>
        </div>

        <p>
          I'm Aadarsha Acharya, CS student based in Kathmandu, Nepal. I love
          writing codes to solve real world problems and enjoy turning complex
          problems into simple, beautiful and intuitive solutions. I love
          speaking and contributing open source too.
        </p>

        <div className={styles.resume}>
          <img src={download} alt="Resume" className={styles.icon} />
          <a
            className={styles.link}
            href="https://drive.google.com/file/d/1yRn7sCfYR29rYTFr8dpLe0CnAyZQod-c/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className={styles.techStack}>
        <TechStack />
      </div>
    </>
  )
}
