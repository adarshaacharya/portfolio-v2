import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import usePersonalPhoto from "../hooks/use-personal-pic"

export default function About() {
  const photo = usePersonalPhoto()
  return (
    <Layout>
      <h1>About Page</h1>
      <Image fixed={photo} />
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
