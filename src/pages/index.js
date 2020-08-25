import Layout from '@components/Layout';
import SEO from '@components/Seo';
import AuthorInfo from '@src/components/AuthorInfo';
import TechStack from '@src/TechStack';
import React from 'react';

export default function IndexPage() {
  return (
    <Layout>
      <SEO title={`Home`} />
      <AuthorInfo />
      <TechStack />
    </Layout>
  );
}
