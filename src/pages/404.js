import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PageNotFound from "../components/NotFound"

const NotFoundPage = () => (
  <>
    <Layout>
      <SEO title={`404 : Page Not Found`} />
      <PageNotFound />
    </Layout>
  </>
)

export default NotFoundPage
