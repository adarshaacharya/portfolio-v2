import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

import styles from "./header.module.scss"

import { useLogo } from "../../hooks/use-logo"

const Header = () => {
  const logo = useLogo()

  return (
    <>
      <nav className={styles.mainNav}>
        <div className={styles.navContainer}>
          <Link to="/" className={styles.logo}>
            <Image fixed={logo} alt="Aadarsha" className={styles.navImage} />
          </Link>

          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link to="/about/" activeClassName={styles.currentPage}>
                About
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/blog/" activeClassName={styles.currentPage}>
                Blogs
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/contact/" activeClassName={styles.currentPage}>
                Contact
              </Link>
            </li>

            <li className={styles.navItem}>
              <ThemeToggler>
                {({ theme, toggleTheme }) => (
                  <div id="themeBtn">
                    <input
                      type="checkbox"
                      id="switch"
                      onChange={e =>
                        toggleTheme(e.target.checked ? "dark" : "light")
                      }
                      checked={theme === "dark"}
                    />
                    <label htmlFor="switch">Toggle</label>
                  </div>
                )}
              </ThemeToggler>
            </li>

          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header
