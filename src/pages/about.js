import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


export default function About() {
  return (
    <Layout>
      <SEO title={`About Me`} />

      <h1 className="text-center">About Me</h1>
      <p>I'm Aadarsha Acharya, CS student based in Kathmandu, Nepal.</p>

      <p>
        I love writing codes to solve real world problems and enjoy turning
        complex problems into simple, beautiful and intuitive solutions.
      </p>

      <p>I love speaking and contributing open source too.</p>

      <Link to="/">&larr; Back to home</Link>
    </Layout>
  )
}
