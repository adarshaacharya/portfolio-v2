import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectsList from "../components/projects-list"

import { useProjects } from "../hooks/use-projects"

export default function Projects() {
  const projects = useProjects()

  return (
    <Layout>
      <SEO title={`Side Projects`} />

      {projects.map(project => (
        <ProjectsList project={project} />
      ))}
      <Link to="/">&larr; Back to home</Link>
    </Layout>
  )
}
