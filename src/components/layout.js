import React from "react"
import "./assets/global.scss"
import styles from "./layout.module.scss"

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default Layout
