import React from 'react';

import SEO from '../components/seo';
import Layout from '../components/layout';

function About() {
  return (
    <Layout>
      <SEO title="About" />
      <h1>About the Design System</h1>
      <h3>A boilerplate for creating superb style guides</h3>
      <p>
        The homepage of a style guide should provide high-level information
        around what the design system is, what benefits it provides, who it’s
        for, and how to get started with it. Like any good index page, it should
        provide clear navigation to key parts of the website.
      </p>
    </Layout>
  );
}

export default About;
