import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

export default function IndexPage() {
  return (
    <Layout>
        <h3>Hello 👋, </h3>
        <p>
          I'm Aadarsha Acharya frontend developer from beautiful city Kathmandu.
        </p>

        <Link to="/about"> Learn about me &rarr; </Link>
    </Layout>
  )
}
