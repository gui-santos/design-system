import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/layout';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <p>This is the home page of the design system docs</p>
      <Link to="/components/button">Go to the button page</Link>
    </Layout>
  );
}

export default IndexPage;
