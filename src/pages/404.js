import React from 'react';

import Layout from '@components/Layout';
import SEO from '@components/Seo';

import PageNotFound from '@components/PageNotFound';

const NotFoundPage = () => (
  <>
    <Layout>
      <SEO title={`404 : Page Not Found`} />
      <PageNotFound />
    </Layout>
  </>
);

export default NotFoundPage;
