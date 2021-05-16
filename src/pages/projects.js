import React from 'react';
import Layout from '@components/Layout';
import SEO from '@components/Seo';
import { SectionTitle } from '@portfolio-ui/';
import getWebsites from '@src/lib/get-websites';
import WebsitePreview from '@src/components/ProjectPreview/web/WebsitePreview';
import getTools from '@src/lib/get-tools';
import Tools from '@src/components/ProjectPreview/tools/Tools';

function Projects() {
  const websites = getWebsites();
  const tools = getTools();

  return (
    <Layout>
      <SEO title={`Projects`} />
      <SectionTitle>Web Applications.</SectionTitle>

      {websites.map(website => (
        <WebsitePreview website={website} key={website.title} />
      ))}

      <SectionTitle>Open Source Tools.</SectionTitle>

      <Tools tools={tools} />
    </Layout>
  );
}

export default Projects;
