import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

import styles from "./header.module.scss"

import { useLogo } from "../hooks/use-logo"

const Header = () => {
  const logo = useLogo()

  return (
    <>
      <nav>
        <div className={styles.gradBar}></div>
        <div className={styles.navContainer}>
          <Link to="/" className={styles.title}>
            <Image
              fixed={logo}
              alt="Aadarsha"
              className={styles.navImage}
              style={{ height: 70, width: 70 }}
              id="nav-img"
            />
          </Link>

          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link to="/about/">About</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/blog/">Blogs</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/contact/">Contact</Link>
            </li>

          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header
