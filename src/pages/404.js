import React from 'react';

import SEO from '../components/seo';
import Layout from '../components/layout';

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
    </Layout>
  );
}

export default NotFoundPage;
