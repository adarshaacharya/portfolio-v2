import React from 'react';
import { Link } from 'gatsby';

import Layout from '@components/Layout';
import SEO from '@components/Seo';
import ProjectPreview from '@components/ProjectPreview';
import { SectionTitle } from '@portfolio-ui/';
import getProjects from '@lib/get-projects';

export default function Projects() {
  const projects = getProjects();

  return (
    <Layout>
      <SEO title={`Projects`} />
      <SectionTitle>Some Things I've Built.</SectionTitle>

      {projects.map(project => (
        <ProjectPreview project={project} key={project.title} />
      ))}
    </Layout>
  );
}
