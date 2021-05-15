import React from 'react';
import Layout from '@components/Layout';
import SEO from '@components/Seo';
import { SectionTitle } from '@portfolio-ui/';
import getWebsites from '@src/lib/get-websites';
import WebsitePreview from '@src/components/ProjectPreview/WebsitePreview';

function Projects() {
  const websites = getWebsites();

  return (
    <Layout>
      <SEO title={`Projects`} />
      <SectionTitle>Some Things I've Built.</SectionTitle>

      {websites.map(website => (
        <WebsitePreview website={website} key={website.title} />
      ))}
    </Layout>
  );
}

export default Projects;
