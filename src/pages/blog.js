import Layout from '@components/Layout';
import SEO from '@components/Seo';
import { SectionTitle } from '@portfolio-ui/';
import Search from '@src/components/Search';
import React from 'react';
import Subscribe from '@src/components/Subscribe';

export default function Blog({ ...props }) {
  return (
    <Layout>
      <SEO title={`Blogs`} />
      <SectionTitle>Blogs.</SectionTitle>
      <Search props={props} />

      <Subscribe/>
    </Layout>
  );
}
