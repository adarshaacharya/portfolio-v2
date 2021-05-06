import React from 'react';

import Layout from '@components/Layout';
import ContactComponent from '@components/Contact';
import SEO from '@components/Seo';

const Contact = () => (
  <Layout>
    <SEO title={`Contact Me`} />
    <ContactComponent />
  </Layout>
);

export default Contact;
