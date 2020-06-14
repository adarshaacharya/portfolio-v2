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
      <h2>Side Projects.</h2>

      {projects.map(project => (
        <ProjectsList project={project} key={project.title}/>
      ))}
      <Link to="/">&larr; Back to home</Link>
    </Layout>
  )
}
