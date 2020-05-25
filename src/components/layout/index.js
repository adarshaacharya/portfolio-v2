import React from "react"

import "../../styles/global.scss"
import styles from "./layout.module.scss"

import Header from "../header"
import Footer from "../footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <div className={styles.layout}>
        <main className="container">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
