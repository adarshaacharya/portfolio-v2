import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

export default function IndexPage() {
  return (
    <Layout>
      <h1>Home Page</h1>
      <p> Welcome to my website</p>
      <Link to="/about">&rarr; About me</Link>
    </Layout>
  )
}
