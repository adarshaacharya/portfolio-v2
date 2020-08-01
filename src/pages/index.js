import React from 'react';

import Layout from '@components/Layout';
import SEO from '@components/Seo';
import AuthorInfo from '@src/components/Home';

export default function IndexPage() {
  return (
    <Layout>
      <SEO title={`Home`} />
      <AuthorInfo />
    </Layout>
  );
}
