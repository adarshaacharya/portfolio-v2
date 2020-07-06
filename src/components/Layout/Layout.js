import React from 'react'
import GlobalStyles from '@src/styles/GlobalStyles'
import Footer from '@components/Footer'
import Header from '@components/Header'
import styles from './layout.module.scss'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <div className={styles.layout}>
        <main className="container">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
