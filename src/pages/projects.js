import React from 'react';
import { Link } from 'gatsby';

import Layout from '@components/Layout';
import SEO from '@components/Seo';
import ProjectPreview from '@components/ProjectPreview';
import { SectionTitle } from '@portfolio-ui/';

import { useProjects } from '@hooks/use-projects';

export default function Projects() {
  const projects = useProjects();

  return (
    <Layout>
      <SEO title={`Side Projects`} />
      <SectionTitle>Some Things I've Built.</SectionTitle>

      {projects.map(project => (
        <ProjectPreview project={project} key={project.title} />
      ))}
      <Link to="/">&larr; Back to home</Link>
    </Layout>
  );
}
