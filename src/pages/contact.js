import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Contact from '../components/contact'
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title={`Contact Me`} />
    <Contact />
  </Layout>
)
