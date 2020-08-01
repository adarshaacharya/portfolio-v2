import React from 'react';

import Layout from '@components/Layout';
import Contact from '@components/Contact';
import SEO from '@components/Seo';

export default () => (
  <Layout>
    <SEO title={`Contact Me`} />
    <Contact />
  </Layout>
);
