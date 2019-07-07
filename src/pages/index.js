import React from 'react';

import SEO from '../components/seo';
import Layout from '../components/layout';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <p>This is the home page of the design system docs</p>
    </Layout>
  );
}

export default IndexPage;
