import React from "react"
import { Link } from "gatsby"

import github from "../../images/social/github.svg"
import insta from "../../images/social/insta.svg"
import twitter from "../../images/social/twitter.svg"

import Layout from "../components/layout"

export default () => (
  <Layout>
    <h1>Contact Me</h1>

    <p>You can contact me on any of these social handles. </p>
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <a href="https://github.com/adarshaacharya">
        <img src={github} alt="GitHub" height="50" />
      </a>
      <a href="https://twitter.com/UltimateAdarshx">
        <img src={twitter} alt="Twitter" height="50" />
      </a>
      <a href="https://instagram.com/adarsha004">
        <img src={insta} alt="Instagram" height="50" />
      </a>
    </div>
    <Link to="/">&larr; Back To home</Link>
  </Layout>
)
