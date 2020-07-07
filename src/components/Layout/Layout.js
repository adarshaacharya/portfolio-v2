import React from 'react'
import GlobalStyles from '@src/styles/GlobalStyles'
import Footer from '@components/Footer'
import Header from '@components/Header'
import styles from './layout.module.scss'
import { LayoutWrapper } from './Layout.style'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <LayoutWrapper>
        <main className="container">{children}</main>
        <Footer />
      </LayoutWrapper>
    </>
  )
}

export default Layout
