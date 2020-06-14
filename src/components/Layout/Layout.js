import React from "react"

import "../../styles/global.scss"
import styles from "./layout.module.scss"

import Header from "../Header"
import Footer from "../Footer"

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