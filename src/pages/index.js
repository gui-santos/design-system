import React from 'react';

import SEO from '../components/seo';
import Layout from '../components/layout';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Welcome to this documentation</h1>
      <p>
        This documentation was created based on the
        gatsby-documentation-starter, which uses MDX, react-docgen, and GatsbyJS
        to generate documentation for React components.
      </p>
      <p>
        Just use the sidebar to navigate to all the components. This is not a
        complete design-system but it shows the potential of this tool to
        generate documentation.
      </p>
      <p>
        I hope you enjoy{' '}
        <span role="img" aria-label="smiley face">
          😄
        </span>
      </p>
    </Layout>
  );
}

export default IndexPage;
