import React from 'react';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import { MDXProvider } from '@mdx-js/react';

import SEO from './seo';
import Layout from './layout';
import Table from './PropsTable/Table';
import Playground from './Playground';

const getPlayground = (mdxProps, componentMetadata) => (
  <Playground mdxProps={mdxProps} componentMetadata={componentMetadata} />
);

function PageDocsTemplate({ children, data }) {
  const { mdx, componentMetadata } = data;

  return (
    <MDXProvider
      components={{
        pre: mdxProps => getPlayground(mdxProps, componentMetadata),
      }}
    >
      <Layout>
        <SEO title={componentMetadata.displayName} />
        {children}

        <h2>{componentMetadata.displayName}</h2>
        <p>{componentMetadata.docblock}</p>

        <MDXRenderer tableOfContents={mdx.tableOfContents}>
          {mdx.code.body}
        </MDXRenderer>

        <Table dataProps={componentMetadata.childrenComponentProp} />
      </Layout>
    </MDXProvider>
  );
}

export const pageQuery = graphql`
  query($id: String!, $name: String!) {
    mdx(id: { eq: $id }) {
      id
      tableOfContents
      code {
        body
      }
    }
    componentMetadata(displayName: { eq: $name }) {
      id
      displayName
      docblock
      doclets
      childrenComponentProp {
        name
        docblock
        required
        type {
          name
          value
        }
        defaultValue {
          value
        }
      }
    }
  }
`;

export default PageDocsTemplate;
