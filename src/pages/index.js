import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Author from "../components/author"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title={`Home Page`} />
      <Author />
      <Link to="/projects/" className="btn"> View My Projects &rarr; </Link>
    </Layout>
  )
}
