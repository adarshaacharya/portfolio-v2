import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import Switch from "react-switch"

import styles from "./header.module.scss"
import { useLogo } from "../../hooks/use-logo"

import sunIcon from "../../../images/toggle/sun-icon.svg"
import moonIcon from "../../../images/toggle/moon-icon.svg"

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
                  <div id={styles.themeToggler}>
                    <Switch
                      onChange={e =>
                        toggleTheme(theme === "light" ? "dark" : "light")
                      }
                      checked={theme === "dark"}
                      onColor="#222"
                      offColor="#333"
                      checkedIcon={<img src={moonIcon} alt="moon icon" />}
                      uncheckedIcon={<img src={sunIcon} alt="sun icon" />}
                      boxShadow="0 0 2px 3px #5d83e8"
                      activeBoxShadow="0 0 2px 3px #5d83e8"
                    />
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
