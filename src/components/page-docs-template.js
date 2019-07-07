import React from 'react';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import { MDXProvider } from '@mdx-js/tag';

import Layout from './layout';
import PropsTable from './PropsTable';

function PageDocsTemplate({ children, data }) {
  const { mdx, componentMetadata } = data;

  return (
    <MDXProvider components={{}}>
      <Layout>
        <div className="content">
          {children}
          <h1>{componentMetadata.displayName}</h1>
          <p>{componentMetadata.docblock}</p>
          <MDXRenderer tableOfContents={mdx.tableOfContents}>
            {mdx.code.body}
          </MDXRenderer>
          <h2 style={{ marginTop: '2rem' }}>Props:</h2>
          <PropsTable propMetaData={componentMetadata.childrenComponentProp} />
        </div>
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
