import React from "react"
import "../styles/global.scss"
import styles from "./layout.module.scss"

import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
